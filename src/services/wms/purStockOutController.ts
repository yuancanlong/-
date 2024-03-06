// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取采退出库单明细 GET /web/wms/purStockOut/detail */
export async function detailUsingGET(
  params: {
    // query
    /** id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.PurStockOutDetailVO>('/web/wms/purStockOut/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取采退出库单列表 POST /web/wms/purStockOut/list */
export async function listUsingPOST(
  body: WMS.PurStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationPurStockOutVO_>('/web/wms/purStockOut/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出商品 POST /web/wms/purStockOut/ware-export */
export async function wareExportUsingPOST(
  body: WMS.PurStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/purStockOut/ware-export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
