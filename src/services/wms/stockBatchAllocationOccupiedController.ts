// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 批次库存流水导出 POST /web/wms/stockBatchAllocationOccupied/export/occupied */
export async function exportBatchOccupiedUsingPOST(
  body: WMS.StockBatchAllocationOccupiedPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockBatchAllocationOccupied/export/occupied', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 预约库存流水导出 POST /web/wms/stockBatchAllocationOccupied/export/occupied/store */
export async function exportOccupiedStoreUsingPOST(
  body: WMS.StockBatchAllocationOccupiedPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockBatchAllocationOccupied/export/occupied/store', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批次库存流水列表 POST /web/wms/stockBatchAllocationOccupied/query */
export async function queryUsingPOST(
  body: WMS.StockBatchAllocationOccupiedPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockBatchAllocationOccupiedVO_>(
    '/web/wms/stockBatchAllocationOccupied/query',
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

/** 预约库存流水列表 POST /web/wms/stockBatchAllocationOccupied/query/occupied/store */
export async function queryOccupiedStoreUsingPOST(
  body: WMS.StockBatchAllocationOccupiedPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockBatchAllocationOccupiedVO_>(
    '/web/wms/stockBatchAllocationOccupied/query/occupied/store',
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
