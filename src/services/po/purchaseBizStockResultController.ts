// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/po/purchase/stock/result/export */
export async function exportUsingPOST(
  body: PO.PurchaseBizStockResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/purchase/stock/result/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /web/po/purchase/stock/result/query */
export async function queryUsingPOST(
  body: PO.PurchaseBizStockResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPurchaseBizStockResultVO_>('/web/po/purchase/stock/result/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
