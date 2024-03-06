// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/invoiceStatisticsView/export */
export async function exportUsingPOST(
  body: WMS.InvoiceStatisticsViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/invoiceStatisticsView/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /web/wms/invoiceStatisticsView/query */
export async function queryUsingPOST(
  body: WMS.InvoiceStatisticsViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationInvoiceStatisticsViewVO_>('/web/wms/invoiceStatisticsView/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 统计汇总报表 POST /web/wms/invoiceStatisticsView/statistics-report */
export async function statisticsReportUsingPOST(
  body: WMS.InvoiceStatisticsViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.InvoiceStatisticsViewVO>('/web/wms/invoiceStatisticsView/statistics-report', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
