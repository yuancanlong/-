// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加模块 POST /web/pop/module/add */
export async function addUsingPOST(body: POP.ModuleUpdateVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/module/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑模块信息 POST /web/pop/module/addOrUpdate */
export async function addOrUpdateUsingPOST(
  body: POP.ModuleUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/module/addOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除模块 POST /web/pop/module/delete */
export async function deleteUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/module/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量启用模块 POST /web/pop/module/enable */
export async function enableUsingPOST(body: POP.EnableVOString_, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/module/enable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取模块信息 GET /web/pop/module/get */
export async function getUsingGET(
  params: {
    // query
    /** 模块编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.ModuleVO>('/web/pop/module/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取模块信息列表 POST /web/pop/module/list */
export async function listUsingPOST(body: POP.ModulePageQueryVO, options?: { [key: string]: any }) {
  return request<POP.PaginationModuleVO_>('/web/pop/module/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
