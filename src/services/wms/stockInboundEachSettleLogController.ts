// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 存货成本调整记录 POST /web/wms/stockInboundEachSettleLog/export */
export async function exportQueryUsingPOST(
  body: WMS.StockInboundEachSettleLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockInboundEachSettleLog/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 存货成本调整记录 POST /web/wms/stockInboundEachSettleLog/query */
export async function queryUsingPOST(
  body: WMS.StockInboundEachSettleLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockInboundEachSettleLogVO_>(
    '/web/wms/stockInboundEachSettleLog/query',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
