// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/base/base-manufacturer/export */
export async function exportUsingPOST(
  body: BASE.BaseManufacturerVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/base-manufacturer/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id获取生产企业信息 GET /web/base/base-manufacturer/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.BaseManufacturerVO>('/web/base/base-manufacturer/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加 POST /web/base/base-manufacturer/insert */
export async function insertUsingPOST(
  body: BASE.BaseManufacturerVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/base-manufacturer/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取商品对应关系分页列表 POST /web/base/base-manufacturer/list */
export async function listUsingPOST(
  body: BASE.BaseManufacturerVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationBaseManufacturerVO_>('/web/base/base-manufacturer/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /web/base/base-manufacturer/update */
export async function updateUsingPOST(
  body: BASE.BaseManufacturerVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/base-manufacturer/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
