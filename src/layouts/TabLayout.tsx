import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { history, connect, Redirect } from 'umi';
import styles from './TabLayout.less';
// import {hasUrlPermissions} from "@/components/Permission/PermissionGuarder";
// import { alreadyInPath } from '@/util';

const { TabPane } = Tabs;
export default ((props) => {
  const [isReady, setIsReady] = useState(false);
  const [activeKey, setActiveKey] = useState('0');
  const { route: { routes }, match, location } = props;
  // const filteredRoutes = routes.filter(item => item.showInTab && hasUrlPermissions(item.path));
  const filteredRoutes = routes.filter(item => item.showInTab);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {

    const curRoute = routes.find(item => { return window.location.pathname.endsWith(item.path) });

    if (curRoute) {
      setActiveKey(String(filteredRoutes.findIndex(item => item.path === curRoute.activeTab)));
    }
  }, [window.location.pathname]);

  const onTabChange = (activeKey) => {
    history.push(filteredRoutes[Number(activeKey)].path);
  };

  if (window.location.pathname.endsWith(match.path)) {
    return <Redirect to={filteredRoutes[0].path} />
  }

  return isReady && <div className={styles.wrap}>
    <Tabs onChange={onTabChange} activeKey={activeKey}>
      {
        filteredRoutes.map((item, index) => {
          // return hasUrlPermissions(item.path) ? <TabPane tab={item.name} key={String(index)} /> : null
          return <TabPane tab={item.name} key={String(index)} />
        })
      }
    </Tabs>
    {props.children}
  </div>;
});
