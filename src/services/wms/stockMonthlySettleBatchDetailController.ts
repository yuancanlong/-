// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出商品批次成本报表Excel POST /web/wms/stockMonthlySettleBatchDetail/exportBatchDetail */
export async function exportBatchDetailUsingPOST(
  body: WMS.StockMonthlySettleBatchDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockMonthlySettleBatchDetail/exportBatchDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询存货月结批次明细 POST /web/wms/stockMonthlySettleBatchDetail/query */
export async function queryUsingPOST(
  body: WMS.StockMonthlySettleBatchDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockMonthlySettleBatchDetailVO_>(
    '/web/wms/stockMonthlySettleBatchDetail/query',
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
