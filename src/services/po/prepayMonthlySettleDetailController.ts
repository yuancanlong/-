// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 详情导出 POST /web/po/prepayMonthlySettleDetail/detail/export */
export async function detailExportUsingPOST(
  body: PO.PrepayMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/prepayMonthlySettleDetail/detail/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 汇总导出 POST /web/po/prepayMonthlySettleDetail/export */
export async function exportUsingPOST(
  body: PO.PrepayMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/prepayMonthlySettleDetail/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询预付账款月结报表 POST /web/po/prepayMonthlySettleDetail/query */
export async function queryUsingPOST(
  body: PO.PrepayMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPrepayMonthlySettleVO_>('/web/po/prepayMonthlySettleDetail/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询合计 POST /web/po/prepayMonthlySettleDetail/selectTotal */
export async function selectTotalUsingPOST(
  body: PO.PrepayMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PrepayMonthlySettleTotalVO>('/web/po/prepayMonthlySettleDetail/selectTotal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
