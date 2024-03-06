// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/gsp/in/pur/return/export */
export async function exportUsingPOST(
  body: WMS.GspOutPurReturnPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gsp/in/pur/return/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询分页列表 POST /web/wms/gsp/in/pur/return/list */
export async function listUsingPOST(
  body: WMS.GspOutPurReturnPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspOutPurReturnVO_>('/web/wms/gsp/in/pur/return/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
