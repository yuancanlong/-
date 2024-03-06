// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/invoiceStatisticsDetailView/export */
export async function exportUsingPOST(
  body: WMS.InvoiceStatisticsDetailViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/invoiceStatisticsDetailView/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出月结明细 POST /web/wms/invoiceStatisticsDetailView/month/export */
export async function exportMonthUsingPOST(
  body: WMS.InvoiceStatisticsDetailMonthPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/invoiceStatisticsDetailView/month/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
