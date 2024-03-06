// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发出商品成本调整记录 POST /web/wms/stockInboundEachSettleLogChange/export */
export async function exportQueryUsingPOST(
  body: WMS.StockInboundEachSettleLogChangePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockInboundEachSettleLogChange/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询批次存货次结日志调整 POST /web/wms/stockInboundEachSettleLogChange/query */
export async function queryUsingPOST(
  body: WMS.StockInboundEachSettleLogChangePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockInboundEachSettleLogChangeVO_>(
    '/web/wms/stockInboundEachSettleLogChange/query',
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
