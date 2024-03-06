import React, { useState, useEffect } from 'react';
import logo from '@/assets/logo-new.png';
import { PageLoading } from '@ant-design/pro-layout';
import { shopName } from '@/util/constants';
import styles from './LoginLayout.less';


const LoginLayout = (props) => {
  const { children } = props;
  const [isReady, setIsReady] = useState(false);
  const currentPage = window.location.pathname == '/manage/user/welcome';
  useEffect(() => {
    setIsReady(true);
  }, []);
  const goBackLogin = () => {
    if (currentPage) {
      // 如果是在welcome页面，点击页面头像才清楚token回退到登录页
      localStorage.removeItem('token');
      window.location.reload();
    }
  }
  if (!isReady) {
    return <PageLoading tip="正在加载用户信息" />;
  }
  return (
    <div className={styles.main}>
      <div className={styles.head} onClick={goBackLogin} style={currentPage ? { cursor: 'pointer' } : {}} >
        <img src={logo} className={styles.logo} alt='' />
        <div className={styles.title}>{shopName}</div>
      </div>
      {children}
    </div>
  );
};
export default LoginLayout;
