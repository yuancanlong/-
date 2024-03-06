// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取应付单详情 GET /web/finance/payable/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<FINANCE.PayableVO>(`/web/finance/payable/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 应付单列表 POST /web/finance/payable/query */
export async function queryUsingPOST(
  body: FINANCE.PayablePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationPayableVO_>('/web/finance/payable/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改应付单 POST /web/finance/payable/update */
export async function updateUsingPOST(body: FINANCE.PayableVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/finance/payable/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
