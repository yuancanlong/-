// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出gsp报损记录 POST /web/wms/bizReportBreakageItem/exportGspBizReportBreakageDetailItem */
export async function exportGspBizReportBreakageDetailItemUsingPOST(
  body: WMS.GspBizReportBreakageDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizReportBreakageItem/exportGspBizReportBreakageDetailItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出gsp出库环节——不合格药品记录 POST /web/wms/bizReportBreakageItem/exportUnqualifiedDetailItem */
export async function exportUnqualifiedDetailItemUsingPOST(
  body: WMS.GspBizReportBreakageDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizReportBreakageItem/exportUnqualifiedDetailItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp报损记录 POST /web/wms/bizReportBreakageItem/queryGspBizReportBreakageDetailItem */
export async function queryGspBizReportBreakageDetailItemUsingPOST(
  body: WMS.GspBizReportBreakageDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspBizReportBreakageDetailItemVO_>(
    '/web/wms/bizReportBreakageItem/queryGspBizReportBreakageDetailItem',
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

/** gsp出库环节——不合格药品记录 POST /web/wms/bizReportBreakageItem/queryUnqualified */
export async function queryUnqualifiedUsingPOST(
  body: WMS.GspBizReportBreakageDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspUnqualifiedDetailItemVO_>(
    '/web/wms/bizReportBreakageItem/queryUnqualified',
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
