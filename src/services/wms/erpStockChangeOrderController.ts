// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/dubheErpStockChangeOrder/export */
export async function exportUsingPOST(
  body: WMS.ErpStockChangeOrderPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/dubheErpStockChangeOrder/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取业务批次库存调整表 GET /web/wms/dubheErpStockChangeOrder/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.ErpStockChangeOrderInfoVO>(`/web/wms/dubheErpStockChangeOrder/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询业务批次库存调整表 POST /web/wms/dubheErpStockChangeOrder/query */
export async function queryUsingPOST(
  body: WMS.ErpStockChangeOrderPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationErpStockChangeOrderVO_>('/web/wms/dubheErpStockChangeOrder/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
