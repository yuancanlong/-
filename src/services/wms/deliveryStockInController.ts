// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 配送退货入库明细 GET /web/wms/deliveryStockIn/detail */
export async function detailUsingGET(
  params: {
    // query
    /** id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.DeliveryStockInDetailVO>('/web/wms/deliveryStockIn/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 配送退货入库列表 POST /web/wms/deliveryStockIn/list */
export async function listUsingPOST(
  body: WMS.DeliveryStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationDeliveryStockInVO_>('/web/wms/deliveryStockIn/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
