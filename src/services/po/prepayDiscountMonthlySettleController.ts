// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出预付账款明细报表 POST /web/po/prepayDiscountMonthlySettle/exportMonthlySettleDetail */
export async function exportMonthlySettleDetailUsingPOST(
  body: PO.PrepayDiscountMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/prepayDiscountMonthlySettle/exportMonthlySettleDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出预付账款汇总报表 POST /web/po/prepayDiscountMonthlySettle/exportMonthlySettleSummary */
export async function exportMonthlySettleSummaryUsingPOST(
  body: PO.PrepayDiscountMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/prepayDiscountMonthlySettle/exportMonthlySettleSummary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 合计 POST /web/po/prepayDiscountMonthlySettle/prepayDiscountMonthlySettleTotal */
export async function prepayDiscountMonthlySettleTotalUsingPOST(
  body: PO.PrepayDiscountMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PrepayDiscountMonthlySettleDetailVO>(
    '/web/po/prepayDiscountMonthlySettle/prepayDiscountMonthlySettleTotal',
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

/** 查询预付账款抵扣汇总报表 POST /web/po/prepayDiscountMonthlySettle/query */
export async function queryUsingPOST(
  body: PO.PrepayDiscountMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPrepayDiscountMonthlySettleDetailVO_>(
    '/web/po/prepayDiscountMonthlySettle/query',
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
