// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/stockInbound/export */
export async function exportUsingPOST(
  body: WMS.StockInboundPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockInbound/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取入库单据库存 GET /web/wms/stockInbound/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.StockInboundVO>(`/web/wms/stockInbound/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询入库单据库存 POST /web/wms/stockInbound/query */
export async function queryUsingPOST(
  body: WMS.StockInboundPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockInboundVO_>('/web/wms/stockInbound/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询合计 POST /web/wms/stockInbound/query/selectTotal */
export async function selectTotalUsingPOST(
  body: WMS.StockInboundPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.StockTotalVO>('/web/wms/stockInbound/query/selectTotal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询合计 POST /web/wms/stockInbound/selectTotal */
export async function selectTotalUsingPOST_2(
  params: {
    // query
    /** supplierId */
    supplierId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.StockInboundStorageDayTotalVO>('/web/wms/stockInbound/selectTotal', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品批次分页查询(采退服务单选择商品) POST /web/wms/stockInbound/stockOutQuery */
export async function stockOutQueryUsingPOST(
  body: WMS.StockOutInboundPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockOutInboundVO_>('/web/wms/stockInbound/stockOutQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 库龄详情导出 POST /web/wms/stockInbound/storageDayDetailExport */
export async function storageDayDetailExportUsingPOST(
  body: WMS.StockInboundStorageDayPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockInbound/storageDayDetailExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 库龄导出 POST /web/wms/stockInbound/storageDayExport */
export async function storageDayExportUsingPOST(
  body: WMS.StockInboundStorageDayPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockInbound/storageDayExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 库龄快照导出 POST /web/wms/stockInbound/storageDayExport/snapshot/${param0} */
export async function storageDayExportSnapshotUsingPOST(
  params: {
    // path
    /** settleId */
    settleId: string;
  },
  options?: { [key: string]: any },
) {
  const { settleId: param0, ...queryParams } = params;
  return request<string>(`/web/wms/stockInbound/storageDayExport/snapshot/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 库龄查询 POST /web/wms/stockInbound/storageDayQuery */
export async function storageDayQueryUsingPOST(
  body: WMS.StockInboundStorageDayPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockInboundStorageDayVO_>('/web/wms/stockInbound/storageDayQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
