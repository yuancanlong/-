// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/wpfInventoryOrder/export */
export async function exportUsingPOST(
  body: WMS.WpfInventoryOrderPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/wpfInventoryOrder/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取盘点记录 GET /web/wms/wpfInventoryOrder/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.WpfInventoryOrderInfoVO>(`/web/wms/wpfInventoryOrder/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询盘点记录 POST /web/wms/wpfInventoryOrder/query */
export async function queryUsingPOST(
  body: WMS.WpfInventoryOrderPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfInventoryOrderVO_>('/web/wms/wpfInventoryOrder/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
