// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取应收单 GET /web/finance/recvReceivable/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** 单据编号 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<FINANCE.RecvReceivableVO>(`/web/finance/recvReceivable/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询应收单 POST /web/finance/recvReceivable/query */
export async function queryUsingPOST(
  body: FINANCE.RecvReceivablePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationRecvReceivableVO_>('/web/finance/recvReceivable/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
