// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/gsp/in/pur/stock/in/export */
export async function exportUsingPOST(
  body: WMS.GspInPurStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gsp/in/pur/stock/in/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询分页列表 POST /web/wms/gsp/in/pur/stock/in/list */
export async function listUsingPOST(
  body: WMS.GspInPurStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspInPurStockInVO_>('/web/wms/gsp/in/pur/stock/in/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
