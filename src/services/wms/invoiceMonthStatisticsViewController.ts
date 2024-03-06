// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/invoiceMonthStatisticsView/export */
export async function exportUsingPOST(
  body: WMS.InvoiceMonthStatisticsViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/invoiceMonthStatisticsView/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /web/wms/invoiceMonthStatisticsView/query */
export async function queryUsingPOST(
  body: WMS.InvoiceMonthStatisticsViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationInvoiceMonthStatisticsViewVO_>(
    '/web/wms/invoiceMonthStatisticsView/query',
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

/** 汇总 POST /web/wms/invoiceMonthStatisticsView/total */
export async function totalUsingPOST(
  body: WMS.InvoiceMonthStatisticsViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.InvoiceMonthStatisticsViewVO>('/web/wms/invoiceMonthStatisticsView/total', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
