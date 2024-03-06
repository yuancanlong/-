// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取单条信息 GET /web/base/base-ware/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.WareVO>('/web/base/base-ware/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取分页列表 POST /web/base/base-ware/list */
export async function listUsingPOST(
  body: BASE.BaseWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareBriefVO_>('/web/base/base-ware/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
