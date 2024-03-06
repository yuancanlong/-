// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 采购入库单详情 GET /web/wms/purStockIn/detail */
export async function detailUsingGET(
  params: {
    // query
    /** id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.PurStockInDetailVO>('/web/wms/purStockIn/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取采购入库单列表 POST /web/wms/purStockIn/list */
export async function listUsingPOST(
  body: WMS.PurStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationPurStockInVO_>('/web/wms/purStockIn/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出商品 POST /web/wms/purStockIn/ware-export */
export async function wareExportUsingPOST(
  body: WMS.PurStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/purStockIn/ware-export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
