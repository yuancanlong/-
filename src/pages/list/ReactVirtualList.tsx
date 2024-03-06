import React, { useState, useMemo, memo } from 'react';
import './ReactVirtualList.css';
import ListItem from './ListItem';
import { useCallback } from 'react';
import { useRef } from 'react';
import _, { isNumber } from 'lodash';

let tiem: any;

const ReactVirtualList = (props: any) => {
  let { list, item: Item, contentWidth, contentHeight, itemHeight } = props;

  const [start, setStart] = useState(0);

  const listDom = useRef<HTMLUListElement>(null);

  const limit = useMemo(() => {
    return 1 + Math.ceil(contentHeight / itemHeight);
  }, [contentHeight, itemHeight]);

  // const scrollHandler = useCallback(
  //     (e) => {
  //         const top = e.target.scrollTop
  //         const curStart = Math.floor(top / (itemHeight))
  //         curStart !== start && setStart(curStart)
  //     },
  //     [itemHeight, start]
  // )

  const scrollHandler = (e) => {
    const top = e.target.scrollTop;
    const curStart = Math.floor(top / itemHeight);
    if (!tiem) {
      tiem = setTimeout(() => {
        clearTimeout(tiem);
        tiem = null;
        setStart(curStart);
      }, 60);
    }
  };

  const end = useMemo(() => {
    return Math.min(start + limit, list.length);
  }, [start, limit, list]);

  const renderList = useMemo(() => {
    return list.slice(start, end).map((v: any, i: any) => (
      <ListItem key={v.id} id={v.id} itemHeight={itemHeight}>
        <Item text={v.v}></Item>
      </ListItem>
    ));
  }, [start, end, list, itemHeight]);

  const transformY = useMemo(() => {
    return start * itemHeight + 'px';
  }, [start, itemHeight]);

  const a = () => {
    const top = listDom.current?.scrollTop;
    if (isNumber(top)) {
      const curStart = Math.floor(top / itemHeight);
      curStart !== start && setStart(curStart);
    }
  };

  // 点击后就调用 `renewToken`，但5分钟内超过1次。
  const throttled = _.throttle(a, 200);
  //throttled
  return (
    <ul
      className="island-virtual-list"
      ref={listDom}
      onScroll={scrollHandler}
      style={{ width: contentWidth + 'px', height: contentHeight + 'px' }}
    >
      <div
        className="listWrapper"
        style={{ height: itemHeight * list.length + 'px' }}
      >
        <div
          className="itemWrapper"
          style={{
            height: contentHeight + 'px',
            transform: `translate3d(0, ${transformY}, 0)`,
          }}
        >
          {renderList}
        </div>
      </div>
    </ul>
  );
};

export default memo(ReactVirtualList);
