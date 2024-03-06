// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出应付账款汇总数据 POST /web/po/unpaidMonthlySettle/excel */
export async function exportUsingPOST(
  body: PO.UnpaidMonthlySettlePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/unpaidMonthlySettle/excel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出明细 POST /web/po/unpaidMonthlySettle/excel/detail */
export async function exportDetailsUsingPOST(
  body: PO.UnpaidMonthlySettlePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/unpaidMonthlySettle/excel/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询应付付账款抵扣月结报表 POST /web/po/unpaidMonthlySettle/query */
export async function queryUsingPOST(
  body: PO.UnpaidMonthlySettlePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationUnpaidMonthlySettleVO_>('/web/po/unpaidMonthlySettle/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 统计汇总应付付账款抵扣月结报表 POST /web/po/unpaidMonthlySettle/total */
export async function totalUsingPOST(
  body: PO.UnpaidMonthlySettlePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.UnpaidMonthlySettleVO>('/web/po/unpaidMonthlySettle/total', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
