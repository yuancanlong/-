import { isNumber } from 'lodash';
import { useCallback, useMemo, useRef } from 'react';
import { connect } from 'umi';
import styles from './Shape.less';
import { getShapeStyle } from './style';

const pointList = ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l']; // 八个方向
const pointList2 = ['r', 'l']; // 左右两个方向
const initialAngle = {
  // 每个点对应的初始角度
  lt: 0,
  t: 45,
  rt: 90,
  r: 135,
  rb: 180,
  b: 225,
  lb: 270,
  l: 315,
};
const angleToCursor = [
  // 每个范围的角度对应的光标
  { start: 338, end: 23, cursor: 'nw' },
  { start: 23, end: 68, cursor: 'n' },
  { start: 68, end: 113, cursor: 'ne' },
  { start: 113, end: 158, cursor: 'e' },
  { start: 158, end: 203, cursor: 'se' },
  { start: 203, end: 248, cursor: 's' },
  { start: 248, end: 293, cursor: 'sw' },
  { start: 293, end: 338, cursor: 'w' },
];
export function mod360(deg: any) {
  return (deg + 360) % 360;
}

const Shape = ({ element, defaultStyle, id, ...props }: any) => {
  const { dispatch } = props;
  const pointListData =
    element.component === 'line-shape' ? pointList2 : pointList;

  const shapeRef = useRef<any>(null);

  const getCursor = () => {
    const rotate = mod360(props?.lowCode?.curComponent?.style?.rotate); // 取余 360
    const result = {};
    let lastMatchIndex = -1; // 从上一个命中的角度的索引开始匹配下一个，降低时间复杂度
    pointList.forEach((point) => {
      //@ts-ignore
      const angle = mod360(initialAngle[point] + rotate);
      const len = angleToCursor.length;
      // eslint-disable-next-line no-constant-condition
      //   while (true) {
      lastMatchIndex = (lastMatchIndex + 1) % len;
      const angleLimit = angleToCursor[lastMatchIndex];
      if (angle < 23 || angle >= 338) {
        //@ts-ignore
        result[point] = 'nw-resize';
        // return;
      }
      if (angleLimit.start <= angle && angle < angleLimit.end) {
        //@ts-ignore
        result[point] = angleLimit.cursor + '-resize';
        // return;
      }
      //   }
    });
    return result;
  };

  let cursors: any = getCursor();

  const getPointStyle = (item: any) => {
    const { width, height }: any = defaultStyle;

    const hasT = /t/.test(item);
    const hasB = /b/.test(item);
    const hasL = /l/.test(item);
    const hasR = /r/.test(item);
    let newLeft = 0;
    let newTop = 0;
    // 四个角的点
    if (item.length === 2) {
      newLeft = hasL ? 0 : width;
      newTop = hasT ? 0 : height;
    } else {
      // 上下两点的点，宽度居中
      if (hasT || hasB) {
        newLeft = width / 2;
        newTop = hasT ? 0 : height;
      }

      // 左右两边的点，高度居中
      if (hasL || hasR) {
        newLeft = hasL ? 0 : width;
        newTop = Math.floor(height / 2);
      }
    }
    const style = {
      marginLeft: '-4px',
      marginTop: '-4px',
      left: `${isNumber(newLeft) ? newLeft + 'px' : newLeft}`,
      top: `${isNumber(newTop) ? newTop + 'px' : newTop}`,
      cursor: cursors[item],
    };
    return style;
  };
  const handleMouseDownOnShape = (e: any) => {
    e.stopPropagation();

    dispatch({
      type: 'lowCode/curComponent',
      payload: { component: element, index: id },
    });

    const pos = { ...defaultStyle };
    const startY = e.clientY;
    const startX = e.clientX;
    // 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
    const startTop = Number(pos.top);
    const startLeft = Number(pos.left);

    const move = (moveEvent: any) => {
      const curX = moveEvent.clientX;
      const curY = moveEvent.clientY;
      pos.top = curY - startY + startTop;
      pos.left = curX - startX + startLeft;
      dispatch({
        type: 'lowCode/setShapeStyle',
        payload: { ...pos },
      });

      dispatch({
        type: 'lowCode/move',
        payload: {
          // curY - startY > 0 true 表示向下移动 false 表示向上移动
          // curX - startX > 0 true 表示向右移动 false 表示向左移动
          isDownward: curY - startY > 0,
          isRightward: curX - startX > 0,
        },
      });
    };

    const up = () => {
      dispatch({
        type: 'lowCode/unmove',
      });
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  };

  const handleRotate = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // 初始坐标和初始角度
    const pos = { ...defaultStyle };
    const startY = e.clientY;
    const startX = e.clientX;
    const startRotate = pos.rotate;

    // 获取元素中心点位置
    const ref = shapeRef.current;
    const rect = ref.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 旋转前的角度
    const rotateDegreeBefore =
      Math.atan2(startY - centerY, startX - centerX) / (Math.PI / 180);

    // 如果元素没有移动，则不保存快照
    let hasMove = false;
    const move = (moveEvent: any) => {
      hasMove = true;
      const curX = moveEvent.clientX;
      const curY = moveEvent.clientY;
      // 旋转后的角度
      const rotateDegreeAfter =
        Math.atan2(curY - centerY, curX - centerX) / (Math.PI / 180);
      // 获取旋转的角度值
      pos.rotate = startRotate + rotateDegreeAfter - rotateDegreeBefore;

      // 修改当前组件样式
      dispatch({
        type: 'lowCode/setShapeStyle',
        payload: { ...pos },
      });
    };
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
      cursors = getCursor();
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  };

  const handleMouseDownOnPoint = (point: any, e: any) => {
    e.stopPropagation();
    e.preventDefault();

    const pos = { ...defaultStyle };
    const height = Number(pos.height);
    const width = Number(pos.width);
    const top = Number(pos.top);
    const left = Number(pos.left);
    const startX = e.clientX;
    const startY = e.clientY;

    // 是否需要保存快照
    let needSave = false;
    const move = (moveEvent: any) => {
      needSave = true;
      const currX = moveEvent.clientX;
      const currY = moveEvent.clientY;
      const disY = currY - startY;
      const disX = currX - startX;
      const hasT = /t/.test(point);
      const hasB = /b/.test(point);
      const hasL = /l/.test(point);
      const hasR = /r/.test(point);
      const newHeight = height + (hasT ? -disY : hasB ? disY : 0);
      const newWidth = width + (hasL ? -disX : hasR ? disX : 0);
      pos.height = newHeight > 0 ? newHeight : 0;
      pos.width = newWidth > 0 ? newWidth : 0;
      pos.left = left + (hasL ? disX : 0);
      pos.top = top + (hasT ? disY : 0);

      // 修改当前组件样式
      dispatch({
        type: 'lowCode/setShapeStyle',
        payload: { ...pos },
      });
    };

    const up = () => {
      dispatch({
        type: 'lowCode/unmove',
      });
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
      // needSave && this.$store.commit('recordSnapshot')
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  };

  return (
    <div
      className={styles.shape}
      style={{ ...getShapeStyle(defaultStyle) }}
      onMouseDown={(e) => {
        handleMouseDownOnShape(e);
      }}
      ref={shapeRef}
    >
      <>
        {props?.lowCode?.curComponent?.id === id ? (
          <span
            className={`iconfont icon-xiangyouxuanzhuan ${styles.iconXiangyouxuanzhuan}`}
            onMouseDown={(e) => {
              handleRotate(e);
            }}
          ></span>
        ) : null}
      </>

      <>
        {props?.lowCode?.curComponent?.id === id
          ? pointListData.map((item) => {
              return (
                <div
                  className={styles['shape-point']}
                  style={{ ...getPointStyle(item) }}
                  key={item}
                  onMouseDown={(e) => {
                    handleMouseDownOnPoint(item, e);
                  }}
                ></div>
              );
            })
          : null}
      </>
      {props.children}
    </div>
  );
};
export default connect(({ lowCode }: any) => ({ lowCode }))(Shape);
