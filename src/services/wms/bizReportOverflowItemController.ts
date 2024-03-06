// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出gsp报溢记录 POST /web/wms/bizReportOverflowItem/exportGspBizReportOverflowDetailItem */
export async function exportGspBizReportOverflowDetailItemUsingPOST(
  body: WMS.GspBizReportOverflowDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizReportOverflowItem/exportGspBizReportOverflowDetailItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp报溢记录 POST /web/wms/bizReportOverflowItem/queryGspBizReportOverflowDetailItem */
export async function queryGspBizReportOverflowDetailItemUsingPOST(
  body: WMS.GspBizReportOverflowDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspBizReportOverflowDetailItemVO_>(
    '/web/wms/bizReportOverflowItem/queryGspBizReportOverflowDetailItem',
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
