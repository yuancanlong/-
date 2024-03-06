// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询 POST /web/po/pur/ware/query */
export async function queryUsingPOST(
  body: PO.PurWareViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPurWareViewVO_>('/web/po/pur/ware/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
