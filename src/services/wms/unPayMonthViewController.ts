// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出应付账款余额汇总月结报表 POST /web/wms/unPayMonthView/export */
export async function unPayViewExportUsingPOST(
  body: WMS.UnPayMonthPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/unPayMonthView/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /web/wms/unPayMonthView/query */
export async function queryUsingPOST(
  body: WMS.UnPayMonthPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationUnPayMonthViewVO_>('/web/wms/unPayMonthView/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 统计全部汇总 POST /web/wms/unPayMonthView/total/query */
export async function totalQueryUsingPOST(
  body: WMS.UnPayMonthPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.UnPayMonthSummaryViewVO>('/web/wms/unPayMonthView/total/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
