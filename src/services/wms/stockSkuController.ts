// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/stockSku/export */
export async function exportUsingPOST(
  body: WMS.StockSkuPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockSku/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询商品库存表 POST /web/wms/stockSku/query */
export async function queryUsingPOST(
  body: WMS.StockSkuPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockSkuVO_>('/web/wms/stockSku/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 商品库存报表 POST /web/wms/stockSku/report/detail/query */
export async function reportDetailQueryUsingPOST(
  body: WMS.StockSkuReportDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockSkuReportVO_>('/web/wms/stockSku/report/detail/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 商品报表导出 POST /web/wms/stockSku/report/export */
export async function stockExportUsingPOST(
  body: WMS.StockSkuReportPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockSku/report/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 商品库存报表 POST /web/wms/stockSku/report/query */
export async function reportQueryUsingPOST(
  body: WMS.StockSkuReportPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockSkuReportVO_>('/web/wms/stockSku/report/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询商品库存合计 POST /web/wms/stockSku/report/selectTotal */
export async function selectTotalUsingPOST(
  body: WMS.StockSkuReportPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.StockTotalVO>('/web/wms/stockSku/report/selectTotal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询预约库存合计 POST /web/wms/stockSku/selectTotal */
export async function selectTotalUsingPOST_2(
  body: WMS.StockSkuPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.StockTotalVO>('/web/wms/stockSku/selectTotal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
