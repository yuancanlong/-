// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除 GET /web/base/gsp-category/delete */
export async function deleteUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/gsp-category/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取单条信息 GET /web/base/gsp-category/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.GspCategoryVO>('/web/base/gsp-category/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加 POST /web/base/gsp-category/insert */
export async function insertUsingPOST(body: BASE.GspCategoryVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/gsp-category/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取类目树 GET /web/base/gsp-category/listTree */
export async function listTreeUsingGET(
  params: {
    // query
    /** 类名(可空) */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.GspCategoryItemVO[]>('/web/base/gsp-category/listTree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新 POST /web/base/gsp-category/update */
export async function updateUsingPOST(body: BASE.GspCategoryVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/gsp-category/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
