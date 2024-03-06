// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除 GET /web/base/dict-item/delete */
export async function deleteUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/dict-item/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取单条信息 GET /web/base/dict-item/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.DictItemVO>('/web/base/dict-item/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加 POST /web/base/dict-item/insert */
export async function insertUsingPOST(body: BASE.DictItemVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/dict-item/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取分页列表 POST /web/base/dict-item/list */
export async function listUsingPOST(
  body: BASE.DictItemVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationDictItemVO_>('/web/base/dict-item/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取指定字典ID的字典项 GET /web/base/dict-item/list-by-key */
export async function listByKeyUsingGET(
  params: {
    // query
    /** 字典ID */
    dictId?: string;
    /** 字典项描述(选填) */
    text?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.DictItemVO[]>('/web/base/dict-item/list-by-key', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新 POST /web/base/dict-item/update */
export async function updateUsingPOST(body: BASE.DictItemVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/dict-item/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
