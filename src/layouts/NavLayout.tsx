/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout from '@ant-design/pro-layout';
import React, { PropsWithChildren, useState } from 'react';
import LeftSideBasicLayout from './LeftSideBasicLayout';
import HeaderRightContentContext from "@/layouts/components/HeaderRightContentContext";
import NavLayoutHeader from '@/layouts/components/NavLayoutHeader';
// import PermissionGuarder from "@/components/Permission/PermissionGuarder";
import defaultSetting from '../../config/defaultSettings';
import styles from './NavLayout.less'
import { useLocation, useAccess } from 'umi';
import { Button, Result } from 'antd';

const NavLayout = (props: PropsWithChildren<any>) => {
  const [rightContent, setRightContent] = useState([]);
  const {
    children,
  } = props;
  const headerRender = (navLayoutProps: PropsWithChildren<any>) => {
    return (
      <NavLayoutHeader
        routes={navLayoutProps.routes}
        extra={rightContent}
      />
    )
  };
  // 下面这句应用场景未知
  // const needMenu = props.route.routes && props.route.routes.length > 1;
  const needMenu = false

  return (
    <HeaderRightContentContext.Provider value={{
      setRightContent,
    }}>
      <ProLayout
        menuHeaderRender={false}
        headerRender={headerRender}
        menuItemRender={false}
        menuDataRender={false}
        menuRender={false}
        collapsedButtonRender={false}
        {...props}
        disableContentMargin
        className={styles.nav}
        {...defaultSetting}
      >
        {needMenu && (<LeftSideBasicLayout {...props} isReplace >
          {children}
        </LeftSideBasicLayout>)}
        {/* {!needMenu && <PermissionGuarder routes={props.route.routes}> */}
        {children}
        {/* {
          useAccess()?.canReadPageA ?
            children : <Result
              status="403"
              title="403"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
        } */}
        {/* </PermissionGuarder>} */}
      </ProLayout>
    </HeaderRightContentContext.Provider>
  );
};

export default NavLayout
