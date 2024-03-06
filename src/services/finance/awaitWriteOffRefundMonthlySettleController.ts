// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 合计 POST /web/finance/awaitWriteOffRefundMonthlySettle/awaitWriteOffRefundTotal */
export async function awaitWriteOffRefundTotalUsingPOST(
  body: FINANCE.AwaitWriteOffRefundMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.AwaitWriteOffRefundMonthlySettleDetailVO>(
    '/web/finance/awaitWriteOffRefundMonthlySettle/awaitWriteOffRefundTotal',
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

/** 导出待核销供应商退款汇总明细 POST /web/finance/awaitWriteOffRefundMonthlySettle/exportMonthlySettleDetail */
export async function exportMonthlySettleDetailUsingPOST(
  body: FINANCE.AwaitWriteOffRefundMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>(
    '/web/finance/awaitWriteOffRefundMonthlySettle/exportMonthlySettleDetail',
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

/** 导出待核销供应商退款汇总表 POST /web/finance/awaitWriteOffRefundMonthlySettle/exportMonthlySettleSummary */
export async function exportMonthlySettleSummaryUsingPOST(
  body: FINANCE.AwaitWriteOffRefundMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>(
    '/web/finance/awaitWriteOffRefundMonthlySettle/exportMonthlySettleSummary',
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

/** 查询待核销供应商退款汇总表 POST /web/finance/awaitWriteOffRefundMonthlySettle/listSummary */
export async function listSummaryUsingPOST(
  body: FINANCE.AwaitWriteOffRefundMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationAwaitWriteOffRefundMonthlySettleDetailVO_>(
    '/web/finance/awaitWriteOffRefundMonthlySettle/listSummary',
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
