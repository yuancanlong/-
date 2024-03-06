// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除 GET /web/base/dict/delete */
export async function deleteUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/dict/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取单条信息 GET /web/base/dict/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.DictVO>('/web/base/dict/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加 POST /web/base/dict/insert */
export async function insertUsingPOST(body: BASE.DictVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/dict/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取分页列表 POST /web/base/dict/list */
export async function listUsingPOST(body: BASE.DictVOPageQuery, options?: { [key: string]: any }) {
  return request<BASE.PaginationDictVO_>('/web/base/dict/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /web/base/dict/update */
export async function updateUsingPOST(body: BASE.DictVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/dict/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
