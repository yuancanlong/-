// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除指定ID的省市区 GET /web/base/area/delete */
export async function deleteUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/area/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取省市区 GET /web/base/area/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.AreaVO>('/web/base/area/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加省市区 POST /web/base/area/insert */
export async function insertUsingPOST(body: BASE.AreaVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/area/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取省市区列表 POST /web/base/area/list */
export async function listUsingPOST(body: BASE.AreaVOPageQuery, options?: { [key: string]: any }) {
  return request<BASE.PaginationAreaVO_>('/web/base/area/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取省市区树 GET /web/base/area/listTree */
export async function listTreeUsingGET(
  params: {
    // query
    /** 行政区域名称(可空) */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.AddressItemVO[]>('/web/base/area/listTree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新省市区 POST /web/base/area/update */
export async function updateUsingPOST(body: BASE.AreaVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/area/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
