import { Link, useLocation, connect } from "umi";
import { Breadcrumb } from "antd";
import React from "react";
import PropTypes from 'prop-types';
import styles from './PathBasedBreadcrumb.less'
// import PermissionGuarder, { hasUrlPermissions } from "@/components/Permission/PermissionGuarder";

const searchLevelsInRoutes = (path, routes) => {
  if (routes === undefined) {
    return []
  }

  const unSortedLevels = [
    ...routes.filter(route => path.startsWith(route.path) && route.breadcrumb),
    ...routes.reduce((acc, cur) => [...acc, ...searchLevelsInRoutes(path, cur.routes)], [])
  ]

  return unSortedLevels.sort((a, b) => a.path.length - b.path.length).map(item => {
    if (item.path === '/') {
      // 防止报没有key的错误
      return { ...item, path: '/index' };
    }
    return item;
  })
}


const PathBasedBreadcrumb = (props) => {
  // const levels = searchLevelsInRoutes(useLocation().pathname, props.routes).filter(route => hasUrlPermissions(route.path))
  const levels = searchLevelsInRoutes(useLocation().pathname, props.routes)

  const query = useLocation().query || {};
  // const itemRender = (route, params, routes) => {
  //   const acceptedQueries = route.acceptedQueries || [];
  //   const subQuery = acceptedQueries.reduce((acc, cur) => {
  //     if (query[cur]) {
  //       acc[cur] = query[cur];
  //     }
  //     return acc
  //   }, {});
  //   const last = routes.indexOf(route) === routes.length - 1;
  //   return last ? (
  //     <span key={route.breadcrumb} className={styles.current}>{route.breadcrumb}</span>
  //   ) :
  //     (<Link className={styles.link} key={route.path} to={{
  //       pathname: route.path,
  //       query: subQuery
  //     }} replace>{route.breadcrumb}</Link>
  //     );
  // }
  return (<div className={styles.container}>
    <Breadcrumb separator='>' className={styles.breadcrumb}>
      {
        levels.map((route, index) => {
          const acceptedQueries = route.acceptedQueries || [];
          const subQuery = acceptedQueries.reduce((acc, cur) => {
            if (query[cur]) {
              acc[cur] = query[cur];
            }
            return acc
          }, {});

          const last = index === levels.length - 1;
          return last ? (
            <Breadcrumb.Item key={route.breadcrumb}>
              <span className={styles.current}>{route.breadcrumb}</span>
            </Breadcrumb.Item>) :
            (<Breadcrumb.Item key={route.path}>
              <Link className={styles.link} to={{
                pathname: route.path,
                query: subQuery
              }} replace>{route.breadcrumb}</Link></Breadcrumb.Item>);
        })
      }
    </Breadcrumb>
  </div>)
};

PathBasedBreadcrumb.propTypes = {
  routes: PropTypes.array.isRequired,
};

// export default connect(({ user }) => ({ user }))(PathBasedBreadcrumb)
export default PathBasedBreadcrumb
