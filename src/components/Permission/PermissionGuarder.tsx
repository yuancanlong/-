import { getRouteAuthority } from '@/util/utils';
import {
  checkPermissions,
  hasPermissions,
} from '@/components/Permission/CheckPermissions';
import noMatch from '@/components/Permission/noMatch';
import { connect, useLocation } from 'umi';
import React, { PropsWithChildren } from 'react';
import { ConnectState } from '@/models/connect';

let cachedRoutes: any[] = [];

const PermissionGuarder = ({
  routes,
  currentPermissions,
  children,
  to,
  exception = noMatch,
  permissions,
}: PropsWithChildren<any>) => {
  const location = useLocation();
  if (routes && cachedRoutes.length === 0) {
    // TODO 只有第一次获取的是全量的，这里还需要有更稳妥的方法
    cachedRoutes = routes;
  }
  let toPath = to;
  if (typeof toPath === 'object') {
    toPath = to.pathname;
  }
  const needPermissions =
    permissions ||
    getRouteAuthority(
      toPath || location.pathname || '/',
      routes || cachedRoutes,
    );
  return checkPermissions(
    needPermissions,
    currentPermissions,
    children,
    exception,
  );
};

export default connect(({ permission }: ConnectState) => {
  return {
    currentPermissions: permission.currentPermissions,
  };
})(PermissionGuarder);

const PermissionGuarderHoc = (Comp: React.ElementType) => {
  const Wrapper = (props: PropsWithChildren<any>) => {
    return checkPermissions(
      props.permissions,
      props.currentPermissions,
      <Comp {...props} />,
      noMatch,
    );
  };
  return connect(({ permission }: ConnectState) => ({
    currentPermissions: permission.currentPermissions,
  }))(Wrapper);
};

const hasUrlPermissions = function (url: { pathname: string } | string) {
  let pathname = url;
  if (typeof url === 'object') {
    pathname = url.pathname;
  }
  if (typeof pathname === 'string') {
    [pathname] = pathname.split('?');
  }
  const needPermissions = getRouteAuthority(pathname, cachedRoutes);
  return hasPermissions(needPermissions);
};

export { PermissionGuarderHoc, hasUrlPermissions };
