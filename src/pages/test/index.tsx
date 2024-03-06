// import styles from './index.less';
import { Button, Pagination } from 'antd';
import { useEffect, useState } from 'react';
import {
  formatMessage,
  getAllLocales,
  getLocale,
  history,
  setLocale,
  useIntl,
} from 'umi';
import styles from './index.less';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';

export default function IndexPage() {
  const [language, setLanguage] = useState(enUS);

  const intl = useIntl();
  // const { setInitialState, initialState, loading } = useModel("@@initialState")

  // console.log(initialState, loading)
  // setInitialState({
  //     canUser: false
  // })
  const toAddOrEdit = () => {
    history.push(`/user`);
  };

  useEffect(() => {
    const tartge: any = [];
    const newItem: any = { id: 0, name: '1111', childern: [] };
    // console.log('1', Object.prototype.toString.call(newItem.childern));
    console.log('123', newItem);

    // newItem.childern = '';
    console.log('22', tartge);
  }, []);

  return (
    // <div data-permissions="13-05-00">
    //   ({console.log('Page three12')})
    //   <Button
    //     onClick={() => {
    //       toAddOrEdit;
    //     }}
    //   >
    //     ss
    //   </Button>

    //   {/* <h1 className={styles.title}>Page three12</h1> */}
    // </div>
    <ConfigProvider locale={language}>
      <Button
        onClick={() => {
          setLocale('en-US', false);
          setLanguage(enUS);
        }}
      >
        国际化
      </Button>
      <p
        className={styles.ycl}
        onClick={() => {
          setLocale('zh-CN', false);
          setLanguage(zhCN);
        }}
      >
        中文
      </p>
      <p>{intl.formatMessage({ id: 'menu.home' })}</p>
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </ConfigProvider>
  );
}
