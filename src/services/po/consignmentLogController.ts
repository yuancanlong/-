// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 历史记录 POST /web/po/consignmentLog/query */
export async function historyListUsingPOST(
  body: PO.ConsignmentPageLogQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationConsignmentLogVo_>('/web/po/consignmentLog/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
