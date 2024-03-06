// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 药监码明细分页查询 POST /web/wms/wpfTraceCodeRewrite/detailPageQuery */
export async function detailPageQueryUsingPOST(
  body: WMS.WpfTraceCodeRewritePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfTraceCodeRewriteDetailVO_>(
    '/web/wms/wpfTraceCodeRewrite/detailPageQuery',
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
