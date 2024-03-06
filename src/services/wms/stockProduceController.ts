// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出GSP批号库存快照 POST /web/wms/stockProduce/exportGspSnapshot */
export async function exportGspSnapshotUsingPOST(
  body: WMS.StockProduceSnapshotPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockProduce/exportGspSnapshot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出商品近效期报表 POST /web/wms/stockProduce/exportGspStockProduceNearlyEffective */
export async function exportGspStockProduceNearlyEffectiveUsingPOST(
  body: WMS.GspStockProduceNearlyEffectivePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockProduce/exportGspStockProduceNearlyEffective', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出批号库存 POST /web/wms/stockProduce/exportStockProduce */
export async function exportStockProduceUsingPOST(
  body: WMS.StockProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockProduce/exportStockProduce', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取批号库存 GET /web/wms/stockProduce/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.StockProduceVO>(`/web/wms/stockProduce/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询批号库存 POST /web/wms/stockProduce/query */
export async function queryUsingPOST(
  body: WMS.StockProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockProduceVO_>('/web/wms/stockProduce/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询批号库存，获取可用数量 POST /web/wms/stockProduce/queryByInventoryQty */
export async function queryByInventoryQtyUsingPOST(
  body: WMS.StockProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockProduceVO_>('/web/wms/stockProduce/queryByInventoryQty', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询批号库存，按商品批号分组 POST /web/wms/stockProduce/queryGroupBySkuProduce */
export async function queryGroupBySkuProduceUsingPOST(
  body: WMS.StockProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWareSkuProduceVO_>('/web/wms/stockProduce/queryGroupBySkuProduce', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询GSP批号库存快照 POST /web/wms/stockProduce/queryGspSnapshot */
export async function queryGspSnapshotUsingPOST(
  body: WMS.StockProduceSnapshotPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockProduceSnapshotVO_>('/web/wms/stockProduce/queryGspSnapshot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询商品近效期报表 POST /web/wms/stockProduce/queryGspStockProduceNearlyEffective */
export async function queryGspStockProduceNearlyEffectiveUsingPOST(
  body: WMS.GspStockProduceNearlyEffectivePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspStockProduceNearlyEffectiveVO_>(
    '/web/wms/stockProduce/queryGspStockProduceNearlyEffective',
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

/** 查询合计 POST /web/wms/stockProduce/selectTotal */
export async function selectTotalUsingPOST(
  body: WMS.StockProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.StockTotalVO>('/web/wms/stockProduce/selectTotal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
