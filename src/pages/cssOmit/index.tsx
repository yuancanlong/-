import styles from './index.less';
const cssOmit = () => {
  return (
    <>
      <div className={styles.box}>
        {/* <!-- 文字盒子 --> */}
        <div className={styles.box__text}>
          腾讯以技术丰富互联网用户的生活。通过通信及社交软件微信和 QQ
          促进用户联系，并助其连接数字内容和生活服务，尽在弹指间。
        </div>
        {/* <!-- 占位盒子 --> */}
        <div className={styles.box__placeholder}></div>
        {/* <!-- 自定义省略盒子 --> */}
        <div className={styles.box__more}>...展开</div>
      </div>
    </>
  );
};
export default cssOmit;
