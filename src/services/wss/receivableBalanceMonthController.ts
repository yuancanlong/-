// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出明细 POST /web/wss/receivableBalanceMonth/exportDetail */
export async function exportDetailUsingPOST(
  body: WSS.ReceivableBalanceMonthPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/receivableBalanceMonth/exportDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出汇总 POST /web/wss/receivableBalanceMonth/exportSummary */
export async function exportSummaryUsingPOST(
  body: WSS.ReceivableBalanceMonthPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/receivableBalanceMonth/exportSummary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询应收账款汇总(月结) POST /web/wss/receivableBalanceMonth/query */
export async function queryUsingPOST(
  body: WSS.ReceivableBalanceMonthPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationReceivableBalanceMonthVO_>('/web/wss/receivableBalanceMonth/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应收账款余额汇总报表合计 POST /web/wss/receivableBalanceMonth/total/query */
export async function totalQueryUsingPOST(
  body: WSS.ReceivableBalanceMonthPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WSS.ReceivableBalanceMonthSummaryVO>(
    '/web/wss/receivableBalanceMonth/total/query',
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
