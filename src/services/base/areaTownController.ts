// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取分页列表 POST /web/base/area-town/list */
export async function listUsingPOST(
  body: BASE.AreaTownVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationAreaTownVO_>('/web/base/area-town/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取街道 GET /web/base/area-town/listAreaTown */
export async function listAreaTownUsingGET(
  params: {
    // query
    /** parentId */
    parentId: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.AddressItemVO[]>('/web/base/area-town/listAreaTown', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
