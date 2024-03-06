// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/gsp/out/pur-stock-out/review/export */
export async function exportUsingPOST(
  body: WMS.GspOutPurStockOutReviewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gsp/out/pur-stock-out/review/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询分页列表 POST /web/wms/gsp/out/pur-stock-out/review/list */
export async function listUsingPOST(
  body: WMS.GspOutPurStockOutReviewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspOutPurStockOutReviewVO_>(
    '/web/wms/gsp/out/pur-stock-out/review/list',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
