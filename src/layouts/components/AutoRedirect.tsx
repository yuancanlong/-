import {hasUrlPermissions} from "@/components/Permission/PermissionGuarder";
import {Redirect} from "react-router";
import React, {PropsWithChildren} from "react";

const searchLevelsInRoutes = (path: string, routes: any[]) => {
  if (routes === undefined) {
    return []
  }
  const levels: any[] = [...routes.filter(route => path.startsWith(route.path)),
    ...routes.reduce((acc, cur) => [...acc, ...searchLevelsInRoutes(path, cur.routes)], [])];
  return levels;
}

const searchFirstExactMatchInRoutes = (path: string, routes: any[]) => {
  const levels = searchLevelsInRoutes(path, routes);
  return levels.find((route: any) => path === route.path);
}

const AutoRedirect: React.FC = (props) => {
  const {children, routes: [{routes}], location: {pathname}, match}: PropsWithChildren<any> = props
  const matchRoute = searchFirstExactMatchInRoutes(pathname, routes);
  const filteredRoutes = matchRoute.routes.filter((item: any) => hasUrlPermissions(item.path) && item.path !== pathname);
  const formatRoutes = filteredRoutes.map(item => {
    return {path: item.path, depth: item.path.split('/').length}
  })
  formatRoutes.sort((a, b) => a.depth - b.depth)
  if (match.path === pathname) {
    return <Redirect to={formatRoutes[0].path} />
  }
  return children;
}

export default AutoRedirect
