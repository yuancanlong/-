// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 销售成本调整记录 POST /web/wms/stockInboundEachSettleTaxChange/export */
export async function exportQueryUsingPOST(
  body: WMS.StockInboundEachSettleTaxChangePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockInboundEachSettleTaxChange/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询批次存货出库已开票调整 POST /web/wms/stockInboundEachSettleTaxChange/query */
export async function queryUsingPOST(
  body: WMS.StockInboundEachSettleTaxChangePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockInboundEachSettleTaxChangeVO_>(
    '/web/wms/stockInboundEachSettleTaxChange/query',
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
