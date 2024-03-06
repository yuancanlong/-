import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'umi';
import styles from './MarkLine.less';
import { getComponentRotatedStyle } from './style';

const lines = ['xt', 'xc', 'xb', 'yl', 'yc', 'yr']; // 分别对应三条横线和三条竖线
const diff = 6; // 相距 dff 像素将自动吸附

const MarkLine = ({ lowCode, dispatch, ...props }: any) => {
  const [lineStatus, setLineStatus] = useState({
    xt: false,
    xc: false,
    xb: false,
    yl: false,
    yc: false,
    yr: false,
  });

  const fn = useCallback(() => {
    showLine(lowCode.isRightward, lowCode.isDownward);
  }, [lowCode?.curComponent?.style?.left, lowCode?.curComponent?.style?.top]);

  useEffect(() => {
    if (lowCode.isRightward != null || lowCode.isDownward != null) {
      fn();
    }
    if (lowCode.isRightward === null && lowCode.isDownward === null) {
      hideLine();
    }
  }, [lowCode]);

  const line = useRef<any>(null);

  const isNearly = (dragValue: any, targetValue: any) => {
    return Math.abs(dragValue - targetValue) <= diff;
  };

  const hideLine = () => {
    setLineStatus({
      xt: false,
      xc: false,
      xb: false,
      yl: false,
      yc: false,
      yr: false,
    });
  };

  const showLine = (isRightward: any, isDownward: any) => {
    const components = lowCode.componentData;

    const curComponentStyle = getComponentRotatedStyle(
      lowCode?.curComponent?.style,
    );
    const curComponentHalfwidth = curComponentStyle.width / 2;
    const curComponentHalfHeight = curComponentStyle.height / 2;
    let obj = {};
    components?.forEach((component: any) => {
      if (component == lowCode?.curComponent) return;

      const componentStyle = getComponentRotatedStyle(component?.style);
      const { top, left, bottom, right } = componentStyle;
      const componentHalfwidth = componentStyle.width / 2;
      const componentHalfHeight = componentStyle.height / 2;

      const conditions = {
        top: [
          {
            isNearly: isNearly(curComponentStyle.top, top),
            lineNode: line.current.children[0], // xt
            line: 'xt',
            dragShift: top,
            lineShift: top,
          },
          {
            isNearly: isNearly(curComponentStyle.bottom, top),
            lineNode: line.current.children[0], // xt
            line: 'xt',
            dragShift: top - curComponentStyle.height,
            lineShift: top,
          },
          {
            // 组件与拖拽节点的中间是否对齐
            isNearly: isNearly(
              curComponentStyle.top + curComponentHalfHeight,
              top + componentHalfHeight,
            ),
            lineNode: line.current.children[1], // xc
            line: 'xc',
            dragShift: top + componentHalfHeight - curComponentHalfHeight,
            lineShift: top + componentHalfHeight,
          },
          {
            isNearly: isNearly(curComponentStyle.top, bottom),
            lineNode: line.current.children[2], // xb
            line: 'xb',
            dragShift: bottom,
            lineShift: bottom,
          },
          {
            isNearly: isNearly(curComponentStyle.bottom, bottom),
            lineNode: line.current.children[2], // xb
            line: 'xb',
            dragShift: bottom - curComponentStyle.height,
            lineShift: bottom,
          },
        ],
        left: [
          {
            isNearly: isNearly(curComponentStyle.left, left),
            lineNode: line.current.children[3], // yl
            line: 'yl',
            dragShift: left,
            lineShift: left,
          },
          {
            isNearly: isNearly(curComponentStyle.right, left),
            lineNode: line.current.children[3], // yl
            line: 'yl',
            dragShift: left - curComponentStyle.width,
            lineShift: left,
          },
          {
            // 组件与拖拽节点的中间是否对齐
            isNearly: isNearly(
              curComponentStyle.left + curComponentHalfwidth,
              left + componentHalfwidth,
            ),
            lineNode: line.current.children[4], // yc
            line: 'yc',
            dragShift: left + componentHalfwidth - curComponentHalfwidth,
            lineShift: left + componentHalfwidth,
          },
          {
            isNearly: isNearly(curComponentStyle.left, right),
            lineNode: line.current.children[5], // yr
            line: 'yr',
            dragShift: right,
            lineShift: right,
          },
          {
            isNearly: isNearly(curComponentStyle.right, right),
            lineNode: line.current.children[5], // yr
            line: 'yr',
            dragShift: right - curComponentStyle.width,
            lineShift: right,
          },
        ],
      };
      const rotate = lowCode?.curComponent?.style?.rotate;
      const needToShow: any[] = [];

      Object.keys(conditions).forEach((key) => {
        // 遍历符合的条件并处理
        //@ts-ignore
        conditions[key].forEach((condition: any) => {
          if (!condition.isNearly) return;
          // 修改当前组件位移
          obj = {
            key: key,
            value:
              rotate != 0
                ? translatecurComponentShift(key, condition, curComponentStyle)
                : condition.dragShift,
          };
          condition.lineNode['style'][key] = `${condition.lineShift}px`;
          needToShow.push(condition.line);
        });
      });

      // 同一方向上同时显示三条线可能不太美观，因此才有了这个解决方案
      // 同一方向上的线只显示一条，例如多条横条只显示一条横线
      if (needToShow.length) {
        chooseTheTureLine(needToShow, isDownward, isRightward);
      }
    });
    dispatch({
      type: 'lowCode/setShapeSingleStyle',
      payload: obj,
    });
  };

  const translatecurComponentShift = (
    key: any,
    condition: any,
    curComponentStyle: any,
  ) => {};
  const chooseTheTureLine = (
    needToShow: any[],
    isDownward: any,
    isRightward: any,
  ) => {
    // 如果鼠标向右移动 则按从右到左的顺序显示竖线 否则按相反顺序显示
    // 如果鼠标向下移动 则按从下到上的顺序显示横线 否则按相反顺序显示

    if (isRightward) {
      if (needToShow.includes('yr')) {
        lineStatus.yr = true;
      } else if (needToShow.includes('yc')) {
        lineStatus.yc = true;
      } else if (needToShow.includes('yl')) {
        lineStatus.yl = true;
      }
    } else {
      if (needToShow.includes('yl')) {
        lineStatus.yl = true;
      } else if (needToShow.includes('yc')) {
        lineStatus.yc = true;
      } else if (needToShow.includes('yr')) {
        lineStatus.yr = true;
      }
    }
    if (isDownward) {
      if (needToShow.includes('xb')) {
        lineStatus.xb = true;
      } else if (needToShow.includes('xc')) {
        lineStatus.xc = true;
      } else if (needToShow.includes('xt')) {
        lineStatus.xt = true;
      }
    } else {
      if (needToShow.includes('xt')) {
        lineStatus.xt = true;
      } else if (needToShow.includes('xc')) {
        lineStatus.xc = true;
      } else if (needToShow.includes('xb')) {
        lineStatus.xb = true;
      }
    }
    setLineStatus({ ...lineStatus });
  };

  return (
    <div className={styles['mark-line']} ref={line}>
      {lines.map((item) => {
        return (
          <div
            key={item}
            className={`${styles.line} ${
              item.includes('x') ? styles.xline : styles.yline
            }`}
            //@ts-ignore
            style={{ display: lineStatus[item] ? 'block' : 'none' }}
          ></div>
        );
      })}
    </div>
  );
};
export default connect(({ lowCode }: any) => ({ lowCode }))(
  React.memo(MarkLine),
);
