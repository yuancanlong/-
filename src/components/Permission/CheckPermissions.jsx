import React from 'react';
// import { CURRENT } from './renderAuthorize'; // eslint-disable-next-line import/no-cycle

// import PromiseRender from './PromiseRender';
import {getDvaApp} from 'umi'

// /**
//  * 通用权限检查方法
//  * Common check permissions method
//  * @param { 权限判定 | Permission judgment } authority
//  * @param { 你的权限 | Your permission description } currentAuthority
//  * @param { 通过的组件 | Passing components } target
//  * @param { 未通过的组件 | no pass components } Exception
//  */
// const checkPermissions = (authority, currentAuthority, target, Exception) => {
//   // 没有判定权限.默认查看所有
//   // Retirement authority, return target;
//   if (!authority) {
//     return target;
//   } // 数组处理
//
//   if (Array.isArray(authority)) {
//     if (Array.isArray(currentAuthority)) {
//       if (currentAuthority.some(item => authority.includes(item))) {
//         return target;
//       }
//     } else if (authority.includes(currentAuthority)) {
//       return target;
//     }
//
//     return Exception;
//   } // string 处理
//
//   if (typeof authority === 'string') {
//     if (Array.isArray(currentAuthority)) {
//       if (currentAuthority.some(item => authority === item)) {
//         return target;
//       }
//     } else if (authority === currentAuthority) {
//       return target;
//     }
//
//     return Exception;
//   } // Promise 处理
//
//   if (authority instanceof Promise) {
//     return <PromiseRender ok={target} error={Exception} promise={authority} />;
//   } // Function 处理
//
//   if (typeof authority === 'function') {
//     try {
//       const bool = authority(currentAuthority); // 函数执行后返回值是 Promise
//
//       if (bool instanceof Promise) {
//         return <PromiseRender ok={target} error={Exception} promise={bool} />;
//       }
//
//       if (bool) {
//         return target;
//       }
//
//       return Exception;
//     } catch (error) {
//       throw error;
//     }
//   }
//
//   throw new Error('unsupported parameters');
// };

const searchPermissions = (neededPermissions, currentPermissions) => {
  return neededPermissions.some(neededPermissionKey => currentPermissions.map(permission => permission.key).includes(neededPermissionKey))
    || currentPermissions.map(permission => permission.children).reduce((previousValue, currentValue) => previousValue || searchPermissions(neededPermissions, currentValue), false)
}

const checkPermissions = (permissions, currentPermissions, target, Exception) => {
  // 没有判定权限.默认查看所有
  if (!permissions) {
    return target;
  } // 数组处理

  if (Array.isArray(permissions)) {
    if (searchPermissions(permissions, currentPermissions)) {
      return target;
    }
    return Exception;
  } // string 处理

  if (typeof permissions === 'string') {
    if (searchPermissions([permissions], currentPermissions)) {
      return target;
    }

    return Exception;
  } // Promise 处理
  throw new Error('unsupported parameters');
};

const hasPermissions = function(permissions) {
  if (!permissions) {
    return true;
  }
  try {
    const {permission: {currentPermissions}} = getDvaApp()._store.getState();
    if (typeof permissions === 'string') {
      const result = searchPermissions([permissions], currentPermissions);
      return result;
    }
    // console.log('searchPermissions', permissions, currentPermissions);
    return searchPermissions(permissions, currentPermissions);
  } catch (e) {
    console.error(e)
    return true;
  }
}

export { checkPermissions , hasPermissions};

// function check(authority, target, Exception) {
//   return checkPermissions(authority, CURRENT, target, Exception);
// }
//
// export default check;
