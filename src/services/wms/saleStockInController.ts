// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 销退入库单明细 GET /web/wms/saleStockIn/detail */
export async function detailUsingGET(
  params: {
    // query
    /** id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.SaleStockInDetailVO>('/web/wms/saleStockIn/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出销退入库单 POST /web/wms/saleStockIn/export */
export async function exportUsingPOST(
  body: WMS.SaleStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/saleStockIn/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取销退入库单列表 POST /web/wms/saleStockIn/list */
export async function listUsingPOST(
  body: WMS.SaleStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationSaleStockInVO_>('/web/wms/saleStockIn/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
