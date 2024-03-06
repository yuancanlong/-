// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除 GET /web/base/msg-platform/delete */
export async function deleteUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/msg-platform/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取单条信息 GET /web/base/msg-platform/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.PlatformVO>('/web/base/msg-platform/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加 POST /web/base/msg-platform/insert */
export async function insertUsingPOST(body: BASE.PlatformVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/msg-platform/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取分页列表 POST /web/base/msg-platform/list */
export async function listUsingPOST(
  body: BASE.PlatformVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationPlatformVO_>('/web/base/msg-platform/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /web/base/msg-platform/update */
export async function updateUsingPOST(body: BASE.PlatformVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/msg-platform/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
