// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出应付账款余额汇总报表 POST /web/wms/unpayView/export */
export async function unPayViewExportUsingPOST(
  body: WMS.UnPayViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/unpayView/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /web/wms/unpayView/query */
export async function queryUsingPOST(
  body: WMS.UnPayViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationUnPayViewVO_>('/web/wms/unpayView/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /web/wms/unpayView/total/query */
export async function totalQueryUsingPOST(
  body: WMS.UnPayViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.UnPaySummaryVO>('/web/wms/unpayView/total/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
