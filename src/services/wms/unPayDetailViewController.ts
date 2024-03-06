// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出应付账款余额明细 POST /web/wms/unpayDetailView/export */
export async function unPayViewDetailExportUsingPOST(
  body: WMS.UnPayDetailViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/unpayDetailView/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出应付账款余额月结明细 POST /web/wms/unpayDetailView/month/export */
export async function unPayViewDetailMonthExportUsingPOST(
  body: WMS.UnPayDetailMonthPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/unpayDetailView/month/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /web/wms/unpayDetailView/query */
export async function queryUsingPOST(
  body: WMS.UnPayDetailViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationUnPayDetailViewVO_>('/web/wms/unpayDetailView/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
