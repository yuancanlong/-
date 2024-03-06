// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 批次库存明细列表导出 POST /web/wms/stockBatchAllocation/export/batch */
export async function exportBatchUsingPOST(
  body: WMS.StockBatchAllocationPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockBatchAllocation/export/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 预约库存查询导出 POST /web/wms/stockBatchAllocation/export/batch/store */
export async function exportStoreUsingPOST(
  body: WMS.StockBatchAllocationPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockBatchAllocation/export/batch/store', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批次库存明细列表 POST /web/wms/stockBatchAllocation/query */
export async function queryUsingPOST(
  body: WMS.StockBatchAllocationPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockBatchAllocationVO_>('/web/wms/stockBatchAllocation/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 预约库存查询 POST /web/wms/stockBatchAllocation/query/batch/store */
export async function queryBatchStoreUsingPOST(
  body: WMS.StockBatchAllocationPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockBatchAllocationVO_>(
    '/web/wms/stockBatchAllocation/query/batch/store',
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

/** 调拨单选择商品列表 POST /web/wms/stockBatchAllocation/query/sku */
export async function querySkuUsingPOST(
  body: WMS.StockBatchAllocationPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockBatchAllocationVO_>('/web/wms/stockBatchAllocation/query/sku', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询合计 POST /web/wms/stockBatchAllocation/selectTotal */
export async function selectTotalUsingPOST(
  body: WMS.StockBatchAllocationPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.StockBatchAllocationTotalVo>('/web/wms/stockBatchAllocation/selectTotal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
