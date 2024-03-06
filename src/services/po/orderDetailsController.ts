// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取采购订单商品详情 GET /web/po/order/details/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.OrderDetailsVO[]>(`/web/po/order/details/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
