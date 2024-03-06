import { Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styles from './index.less';
import { LinkedList } from './single-linked-list';

const waterfall = () => {
  const textInput = useRef<any>(null);
  const fall = useRef<any>(null);
  const panelContent = useRef<any>(null);

  const [isActive, setIsActive] = useState(false);

  //单链表
  const list = new LinkedList();
  list.append(1);

  useEffect(() => {
    const node = textInput.current;

    // 图像加载完成的逻辑
    const node1 = fall.current;
    const childs = node1.childNodes;
    const top = node1.getBoundingClientRect().top;
    childs.forEach((e: HTMLDivElement, i: number) => {
      e.setAttribute('key', i + '');
      const rect = e.getBoundingClientRect();
      if (
        rect.top < textInput.current.clientHeight + top &&
        rect.bottom > top + rect.height
      ) {
        console.log(e.getAttribute('key'));
      }
    });

    node.addEventListener('scroll', function () {
      // 滚动的高度 加 窗口的高度 大于等于 元素高度 保存溢出窗口的内容
      if (
        textInput.current.scrollTop + textInput.current.clientHeight >=
        textInput.current.scrollHeight
      ) {
        loadMoreData();
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);
  async function loadMoreData() {
    try {
      //   const response = await fetch('你的API地址?page=2'); // 假设你的API支持分页，这里请求第二页的数据
      //   const data = await response.json();
      const data: any = [];
      populate(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  function populate(data: any) {
    const container = fall.current;

    //   data.forEach((item) => {
    const div = document.createElement('div');
    div.setAttribute('key', textInput.current.scrollTop);
    // div.classList.add('item');

    // 大图片 加载过慢 监听 onload 时间 完成 修改 元素的 className

    const img = new Image();
    img.src =
      'https://img1.baidu.com/it/u=834894649,3086306884&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422';
    img.onload = function () {
      container.appendChild(div);
      div.style.display = 'flex';
      div.style.width = container.offsetWidth / 2 - 10 + 'px';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';

      img.style.height = 200 + 'px';
      img.style.width;
      div.appendChild(img);

      // 图像加载完成的逻辑
      // div.getBoundingClientRect() 是 JavaScript 中的一个方法，用于获取元素的大小及其相对于视口的位置。
      // 当图片元素的顶部坐标小于视口的高度，且底部坐标大于 0 时，说明图片元素已经进入可视区域
      // const rect = div.getBoundingClientRect();
      // if (rect.top < textInput.current.clientHeight && rect.bottom > 0) {
      //   console.log(div.getAttribute('key'));
      // }
    };
  }

  // transform: rotate(90deg);
  // transition: all 0.5;

  const handleClick = (e: any) => {
    // e.target.style.transform = 'rotate(90deg)';
    // e.target.style.transition = 'all 0.5s';
    // const panelText = document.querySelector('.panelText');
    // console.log(panelText, 'panelText');
    // if (e.target.style.transform) {
    //   e.target.style.transform = 'rotate(0)';
    // }
    // console.log();
    // panelContent.current.classList.add('active');
    setIsActive(!isActive);
  };
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div className={styles.tooltipWrapper}>
        <div className={styles.tooltipContent}>我是提示信息</div>
        <div className={styles.tooltipTip}>提示信息</div>
      </div>

      <div className={styles.content} ref={textInput}>
        <div className={styles.fall} ref={fall}>
          <div className={styles.item} style={{ height: '140px' }}>
            <p>loading</p>
          </div>
          <div className={styles.item} style={{ height: '190px' }}>
            <p>loading</p>
          </div>
          <div className={styles.item} style={{ height: '170px' }}>
            <p>loading</p>
          </div>
          <div className={styles.item} style={{ height: '120px' }}>
            <p>loading</p>
          </div>
          <div className={styles.item} style={{ height: '160px' }}>
            <p>loading</p>
          </div>
          <div className={styles.item} style={{ height: '180px' }}>
            <p>loading</p>
          </div>
          <div className={styles.item} style={{ height: '140px' }}>
            <p>loading</p>
          </div>
          <div className={styles.item} style={{ height: '150px' }}>
            <p>loading</p>
          </div>
          <div className={styles.item} style={{ height: '170px' }}>
            <p>loading</p>
          </div>
          <div className={styles.item} style={{ height: '170px' }}>
            <p>loading</p>
          </div>
        </div>
      </div>

      <Space>
        <h1 style={{ fontWeight: 'bold' }}>折叠面板</h1>
      </Space>
      <div
        style={{
          border: '1px solid red',
          width: '260px',
        }}
      >
        <div
          className={styles.panel}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <span>我是标题</span>
          <span className={styles.triangle}></span>
        </div>
        <div
          className={`${styles.panelContent} ${
            isActive ? styles.active : styles.noActive
          }`}
          ref={panelContent}
        >
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </div>
    </Space>
  );
};
export default waterfall;
