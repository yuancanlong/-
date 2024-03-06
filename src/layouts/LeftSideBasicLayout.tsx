/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { BasicLayoutProps } from '@ant-design/pro-layout';
import React, { PropsWithChildren, useState } from 'react';
import { Link, connect } from 'umi';
import RightContent from '@/layouts/components/GlobalHeader/RightContent';
import logo from '../assets/logo-new.png';
import styles from './LeftSideBasicLayout.less';
// import {checkPermissions} from "@/components/Permission/CheckPermissions";
// import PermissionGuarder from "@/components/Permission/PermissionGuarder";
import RefactorMenu from '@/layouts/components/leftNavMenu';
import defaultSettings from "../../config/defaultSettings"
// import {ConnectState} from "@/models/connect";
import EmptyContent from '@/pages/404'

const menuDataRender = (currentPermissions: string[]) => (menuList: PropsWithChildren<any>[]): any => {
  return menuList.map((item) => {
    const localItem = { ...item, children: item.children ? menuDataRender(currentPermissions)(item.children) : [] };
    // return checkPermissions(item.permissions, currentPermissions, {
    //   ...localItem,
    // }, null)
    return localItem
  });
}

const LeftSideBasicLayout = (props: PropsWithChildren<any>) => {
  const {
    children,
    match,
    currentPermissions,
  } = props;

  const isFirstLevelNavigation = match.path === '/';
  const additionalSetting: BasicLayoutProps = {};
  additionalSetting.rightContentRender = () => {
    return <RightContent />;
  };
  const siDerWidth = defaultSettings.siderWidth

  const [empty, setEmpty] = useState(false)

  const is404 = (url: any, children: any): any => {
    if (children === undefined) {
      return []
    }
    const unSortedLevels = [
      ...children.filter(route => { return route?.microApp || url === route.path }),
      ...children.reduce((acc, cur) => { return [...acc, ...is404(url, cur.children)] }, [])
    ]
    return unSortedLevels
  }


  return (
    <ProLayout
      className={styles.layout}
      // loading={true}
      contentStyle={{ width: `calc(100vw - ${siDerWidth}px)`, height: `calc(100vh - 64px)`, overflow: 'scroll' }}
      logo={<img src={logo} style={{ display: 'inline-block', width: 50, height: 50 }} alt='' />}
      menuHeaderRender={(logoDom, titleDom) => {
        if (isFirstLevelNavigation) {
          return (
            //@ts-ignore
            <Link to="/">
              {logoDom}
              {titleDom}
            </Link>
          );
        }
        return false;
      }}
      menuRender={(menuData) => <RefactorMenu isFirstLevelNavigation={isFirstLevelNavigation} data={menuData} />}
      breadcrumbRender={(routers = []) => {
        return [
          ...routers,
        ];
      }}
      menuDataRender={menuDataRender(currentPermissions)}
      {...props}
      {...defaultSettings}
      {...additionalSetting}
      layout='side'
      disableContentMargin={isFirstLevelNavigation}
      siderWidth={siDerWidth}
      breakpoint={false}
      onPageChange={
        () => {
          const data = is404(location.pathname, props.route.children)
          console.log(data, '222')
          if (!(data.length > 0)) {
            setEmpty(true)
          }
        }
      }
    >
      {/* <PermissionGuarder routes={props.route.routes}> */}

      {
        empty ? <EmptyContent /> :
          children
      }
      {/* </PermissionGuarder> */}
    </ProLayout>
  );
};

// export default connect(({ }) => ({
//   // currentPermissions: permission.currentPermissions,
//   // user
// }))(LeftSideBasicLayout);

export default LeftSideBasicLayout;
