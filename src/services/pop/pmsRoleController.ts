// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑角色 POST /web/pop/role/addOrUpdate */
export async function addOrUpdateUsingPOST(
  body: POP.RoleUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/role/addOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取全部角色 GET /web/pop/role/all */
export async function allUsingGET(options?: { [key: string]: any }) {
  return request<POP.RoleVO[]>('/web/pop/role/all', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 绑定用户角色 POST /web/pop/role/bind */
export async function bindUsingPOST(body: POP.BindRoleVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/role/bind', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除角色 POST /web/pop/role/delete */
export async function deleteUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/role/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 启用/停用角色 POST /web/pop/role/enable */
export async function enableUsingPOST(body: POP.EnableVOString_, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/role/enable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取角色 GET /web/pop/role/get */
export async function getUsingGET(
  params: {
    // query
    /** 角色编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.RoleVO>('/web/pop/role/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取角色列表 POST /web/pop/role/list */
export async function listUsingPOST(body: POP.RolePageQueryVO, options?: { [key: string]: any }) {
  return request<POP.PaginationRoleVO_>('/web/pop/role/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取角色拥有的模块 GET /web/pop/role/listRoleModule */
export async function listRoleModuleUsingGET(
  params: {
    // query
    /** 角色编号 */
    roleId?: string;
    /** 角色类型:1-总部 2-分店 */
    roleType?: number;
  },
  options?: { [key: string]: any },
) {
  return request<POP.TreeModuleExtVO[]>('/web/pop/role/listRoleModule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索用户 POST /web/pop/role/listUserByRole */
export async function listUserByRoleUsingPOST(
  body: POP.UserPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<POP.PaginationUserByRoleVO_>('/web/pop/role/listUserByRole', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询已绑定角色的用户 GET /web/pop/role/listUserFromBindRole */
export async function listUserFromBindRoleUsingGET(
  params: {
    // query
    /** 角色ID */
    roleId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.UserByRoleVO[]>('/web/pop/role/listUserFromBindRole', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 解绑用户角色 POST /web/pop/role/unBind */
export async function unBindUsingPOST(body: POP.BindRoleVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/role/unBind', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
