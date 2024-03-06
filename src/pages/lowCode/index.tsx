import { Layout } from 'antd';
import styles from './index.less';
import componentList from './components/list';
import './assets/iconfont/iconfont.css';
import Grid from './components/Grid';
import React, { useRef } from 'react';
import { history, Dispatch, connect, useLocation } from 'umi';
import { divide, multiply } from 'mathjs';
import {
  getCanvasStyle,
  getShapeStyle,
  getStyle,
  getSVGStyle,
} from './components/style';
import SVGTriangle from './components/svg/SVGTriangle';
import Shape from './components/Shape';
import MarkLine from './components/MarkLine';

const needToChangeAttrs2 = ['width', 'height', 'fontSize'];
export function changeComponentSizeWithScale(component: any) {
  Object.keys(component.style).forEach((key) => {
    if (needToChangeAttrs2.includes(key)) {
      if (key === 'fontSize' && component.style[key] === '') return;

      //   component.style[key] = format(component.style[key], store.state.canvasStyleData.scale)
      component.style[key] = format(component.style[key], 100);
    }
  });
}
function format(value: any, scale: any) {
  return multiply(value, divide(parseFloat(scale), 100));
}

export function deepCopy(target: any) {
  if (typeof target == 'object') {
    const result = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (typeof target[key] == 'object') {
        //@ts-ignore
        result[key] = deepCopy(target[key]);
      } else {
        //@ts-ignore
        result[key] = target[key];
      }
    }

    return result;
  }

  return target;
}
function generateUniqueID() {
  const date = new Date();
  const random = Math.random();
  return `${date.getTime()}${date.getDay()}${random.toString(36).substr(2, 5)}`;
}

export function changeStyleWithScale(value: any) {
  return multiply(value, divide(100, 100));
}

const lowCode = (props: any) => {
  const { Header, Sider, Content } = Layout;
  const { lowCode } = props;

  const parentRef = useRef<any>(null);

  const handleDragStart = (e: any) => {
    e.dataTransfer.setData('index', e.target.dataset.index);
  };

  const handleDrop = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const index = e.dataTransfer.getData('index');
    const rect = parentRef?.current;
    const rectInfo = rect?.getBoundingClientRect();

    if (index) {
      const component = deepCopy(componentList[index]);
      component.style.top = e.clientY - rectInfo.y;
      component.style.left = e.clientX - rectInfo.x;
      component.id = generateUniqueID();

      // // 根据画面比例修改组件样式比例
      changeComponentSizeWithScale(component);
      await props?.dispatch({
        type: 'lowCode/addComponent',
        payload: { ...component },
      });
      // this.$store.commit('addComponent', { component })
      // this.$store.commit('recordSnapshot')
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    // e.dataTransfer.dropEffect = 'copy'
  };

  const handleMouseDown = (e: any) => {
    e.stopPropagation();
    // this.$store.commit('setClickComponentStatus', false)
    // this.$store.commit('setInEditorStatus', true)
  };

  const deselectCurComponent = (e: any) => {
    // if (!this.isClickComponent) {
    //     this.$store.commit('setCurComponent', { component: null, index: null })
    // }
    // // 0 左击 1 滚轮 2 右击
    // if (e.button != 2) {
    //     this.$store.commit('hideContextMenu')
    // }
  };

  return (
    <Layout className={styles.content_layout}>
      <Header>Header</Header>
      <Layout>
        <Sider>
          <div className={styles.componentList} onDragStart={handleDragStart}>
            {componentList.map((item, index) => {
              return (
                <div key={item.component} draggable data-index={index}>
                  {item.icon.substr(0, 2) === 'el' ? (
                    <span className={`${item.icon}`}></span>
                  ) : (
                    <span className={'iconfont' + ` icon-${item.icon}`}></span>
                  )}
                </div>
              );
            })}
          </div>
        </Sider>
        <Content
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onMouseDown={handleMouseDown}
          onMouseUp={deselectCurComponent}
        >
          <div
            ref={parentRef as any}
            className={styles.editor}
            style={{
              ...getCanvasStyle(lowCode.canvasStyleData),
              width: changeStyleWithScale(lowCode.canvasStyleData.width) + 'px',
              height:
                changeStyleWithScale(lowCode.canvasStyleData.height) + 'px',
            }}
          >
            {/* <Grid></Grid> */}
            {lowCode.componentData.map((item: any, index: any) => {
              return item.component.startsWith('SVG') ? (
                <div
                  className="component"
                  key={'component' + item.id}
                  style={{
                    ...getSVGStyle(item.style),
                    zIndex: index,
                  }}
                >
                  {React.createElement(SVGTriangle, item)}
                </div>
              ) : (
                <Shape
                  element={item}
                  defaultStyle={item.style}
                  id={item.id}
                  key={item.id}
                >
                  <div
                    className="component"
                    key={'component' + item.id}
                    style={{
                      ...getStyle(item.style),
                      zIndex: index,
                    }}
                    //   element={item}
                  ></div>
                </Shape>
              );
            })}

            <MarkLine></MarkLine>
          </div>
        </Content>
        <Sider>Sider</Sider>
      </Layout>
    </Layout>
  );
};
export default connect(({ lowCode }: any) => ({ lowCode }))(lowCode);
