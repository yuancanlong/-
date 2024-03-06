// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** listByInvoiceIds POST /web/po/settlePool */
export async function listByInvoiceIdsUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<PO.SettlePoolVO[]>('/web/po/settlePool', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listPrepayItemPurOrderId POST /web/po/settlePool/prepay */
export async function listPrepayItemPurOrderIdUsingPOST(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<PO.SettlePoolPrepay[]>('/web/po/settlePool/prepay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** query POST /web/po/settlePool/query */
export async function queryUsingPOST(
  body: PO.InvoiceAppOfSettlePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationSettlePoolPageVO_>('/web/po/settlePool/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
