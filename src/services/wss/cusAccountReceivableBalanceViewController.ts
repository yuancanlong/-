// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出明细 POST /web/wss/account-receivable-balance-view/exportDetail */
export async function exportDetailUsingPOST(
  body: WSS.CusAccountReceivableBalanceViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/account-receivable-balance-view/exportDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出汇总 POST /web/wss/account-receivable-balance-view/exportSummary */
export async function exportSummaryUsingPOST(
  body: WSS.CusAccountReceivableBalanceViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/account-receivable-balance-view/exportSummary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应收账款余额汇总报表分页查询 POST /web/wss/account-receivable-balance-view/query */
export async function queryUsingPOST(
  body: WSS.CusAccountReceivableBalanceViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationCusAccountReceivableBalanceViewVO_>(
    '/web/wss/account-receivable-balance-view/query',
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

/** 应收账款余额汇总报表合计 POST /web/wss/account-receivable-balance-view/total/query */
export async function totalQueryUsingPOST(
  body: WSS.CusAccountReceivableBalanceViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WSS.CusAccountReceivableBalanceViewSummaryVO>(
    '/web/wss/account-receivable-balance-view/total/query',
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
