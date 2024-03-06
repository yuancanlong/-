// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/po/gsp/in/pur/record/export */
export async function exportUsingPOST(
  body: PO.GspInPurRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/gsp/in/pur/record/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询分页列表 POST /web/po/gsp/in/pur/record/list */
export async function listUsingPOST(
  body: PO.GspInPurRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationGspInPurRecordVO_>('/web/po/gsp/in/pur/record/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
