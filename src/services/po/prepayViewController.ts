// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 详情导出 POST /web/po/prepayView/detail/export */
export async function detailExportUsingPOST(
  body: PO.PrepayViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/prepayView/detail/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 汇总导出 POST /web/po/prepayView/export */
export async function exportUsingPOST(
  body: PO.PrepayViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/prepayView/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /web/po/prepayView/query */
export async function queryUsingPOST(
  body: PO.PrepayViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPrepayViewVO_>('/web/po/prepayView/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询合计 POST /web/po/prepayView/selectTotal */
export async function selectTotalUsingPOST(
  params: {
    // query
    /** supplierId */
    supplierId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.PrepayViewTotalVO>('/web/po/prepayView/selectTotal', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
