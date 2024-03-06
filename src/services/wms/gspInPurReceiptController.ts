// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/gsp/in/pur/receipt/export */
export async function exportUsingPOST(
  body: WMS.GspInPurReceiptPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gsp/in/pur/receipt/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询分页列表 POST /web/wms/gsp/in/pur/receipt/list */
export async function listUsingPOST(
  body: WMS.GspInPurReceiptPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspInPurReceiptVO_>('/web/wms/gsp/in/pur/receipt/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
