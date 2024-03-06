// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 配送出库单明细 GET /web/wms/deliveryOut/detail */
export async function detailUsingGET(
  params: {
    // query
    /** id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.DeliveryOutDetailVO>('/web/wms/deliveryOut/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 配送出库单列表 POST /web/wms/deliveryOut/list */
export async function listUsingPOST(
  body: WMS.DeliveryOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationDeliveryOutVO_>('/web/wms/deliveryOut/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
