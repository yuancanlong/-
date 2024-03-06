import React, { useEffect, useState, PropsWithChildren } from 'react';
import ProLayout, { BasicLayoutProps } from '@ant-design/pro-layout';
import { IRouteComponentProps } from 'umi'
import logo from '../assets/logo-new.png';
import styles from './LeftSideBasicLayout.less';
import { PageHeader, Breadcrumb } from 'antd';

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
    console.log(route.routes, 'route')

    const headerRender = (navLayoutProps: PropsWithChildren<any>) => {
        return (<PageHeader
            className={styles.nav_layout_header}
            title={<Breadcrumb routes={route.routes} />}
        />)
    };

    return <ProLayout
        className={styles.layout}
        contentStyle={{ width: `calc(100vw - ${240}px)`, height: `calc(100vh - 64px)` }}
        logo={<img src={logo} style={{ display: 'inline-block', width: 40, height: 40 }} alt='' />}
        layout='side'
        siderWidth={240}
        breakpoint={false}
        contentWidth='Fluid'
        fixedHeader={true}
        fixSiderbar={true}
        colorWeak={false}
        menu={
            { locale: false, }
        }
        headerRender={headerRender}
    // breadcrumbRender={(routers = []) => {
    //     console.log(routers, 'routers')
    //     return [
    //         ...routers,
    //     ];
    // }}
    >
        {children}
    </ProLayout>
}