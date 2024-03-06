import React, { useEffect } from 'react';
import styles from './index.less';

const Rotation = () => {
  let title = React.createRef();

  useEffect(() => {
    const width = title.children[0].offsetWidth;

    let num = 0;
    const times = setInterval(() => {
      num += width;
      if (num >= width * title?.children?.length) {
        num = 0;
        title.style.transform = `translate(0,0)`;
        title.style.transition = 'none';
      } else {
        title.style.transform = `translateX(-${num}px)`;
        title.style.transition = '1s';
      }
    }, 1500);
    return () => {
      clearInterval(times);
      title = null;
    };
  }, [title]);

  const myBind = (target: any, ...argr: any) => {
    const fn: any = this;
    var F = function () {};
    if (fn.prototype) {
      //将Person的原型全部拷贝到F
      F.prototype = fn.prototype;
    }
    var res = function (...others: any[]) {
      var callObj = F.prototype.isPrototypeOf(this) ? this : target;
      fn.call(callObj, ...argr, ...others);
    };
    res.prototype = new F();
    return res;
  };

  return (
    <>
      <div className={styles.box} target-key={'asd'}>
        <div
          className={styles.bgContent}
          ref={(ele) => {
            title = ele;
          }}
        >
          <div className={styles.bgColor}>1</div>
          <div className={styles.bgColor}>2</div>
          <div className={styles.bgColor}>3</div>
          <div className={styles.bgColor}>4</div>
          <div className={styles.bgColor}>5</div>
          <div className={styles.bgColor}>6</div>
        </div>
      </div>
      <p>---------------手写bind------------------</p>
    </>
  );
};

export default Rotation;
