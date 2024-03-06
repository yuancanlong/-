import { PageHeader } from 'antd';
// import { isIe } from '@/util';
import React from "react";
import styles from './NavLayoutHeader.less';
import PathBasedBreadcrumb from "@/layouts/components/PathBasedBreadcrumb";

const Breadcrumb = (props) => {
  return <PathBasedBreadcrumb routes={props.routes} />
}

export default (props) => {
  const { routes } = props;

  const stylesParams = false ? {
    borderBottom: '1px solid #f0f0f0',
    top: 55,
    left: 240
  } :
    { borderBottom: '1px solid #f0f0f0' }
  return (<PageHeader
    {...props}
    className={styles.nav_layout_header}
    title={<Breadcrumb routes={routes} />}
    style={stylesParams}
  />);
}
