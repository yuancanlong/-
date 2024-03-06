// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除 GET /web/base/msg-template/delete */
export async function deleteUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/msg-template/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取单条信息 GET /web/base/msg-template/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.TemplateVO>('/web/base/msg-template/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加 POST /web/base/msg-template/insert */
export async function insertUsingPOST(body: BASE.TemplateVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/msg-template/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取分页列表 POST /web/base/msg-template/list */
export async function listUsingPOST(
  body: BASE.TemplateVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationTemplateVO_>('/web/base/msg-template/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /web/base/msg-template/update */
export async function updateUsingPOST(body: BASE.TemplateVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/msg-template/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
