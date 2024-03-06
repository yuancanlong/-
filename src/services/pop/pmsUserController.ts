// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加或更新用户信息 POST /web/pop/user/addOrUpdate */
export async function addOrUpdateUsingPOST(
  body: POP.UserUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/user/addOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除用户 POST /web/pop/user/delete */
export async function deleteUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量设置用户状态 POST /web/pop/user/enable */
export async function enableUsingPOST(body: POP.StatusVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/user/enable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出用户列表 POST /web/pop/user/export */
export async function exportUsingPOST(body: POP.UserPageQueryVO, options?: { [key: string]: any }) {
  return request<string>('/web/pop/user/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出登录记录 POST /web/pop/user/exportLog */
export async function exportLogUsingPOST(
  body: POP.UserPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/pop/user/exportLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户信息 GET /web/pop/user/get */
export async function getUsingGET(
  params: {
    // query
    /** 用户编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.UserVO>('/web/pop/user/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得当前用户 GET /web/pop/user/getUserInfo */
export async function getCurrentUserUsingGET(options?: { [key: string]: any }) {
  return request<POP.UserInfoVO>('/web/pop/user/getUserInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户列表 POST /web/pop/user/list */
export async function listUsingPOST(body: POP.UserPageQueryVO, options?: { [key: string]: any }) {
  return request<POP.PaginationUserVO_>('/web/pop/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登出 POST /web/pop/user/logout */
export async function logoutUsingPOST(options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 修改密码 POST /web/pop/user/modifyPassword */
export async function modifyPasswordUsingPOST(
  body: POP.ModifyPwdVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/user/modifyPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重设密码 POST /web/pop/user/resetPwd */
export async function resetPwdUsingPOST(body: POP.ResetPwdVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/user/resetPwd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
