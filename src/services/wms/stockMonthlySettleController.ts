// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 申请月结 POST /web/wms/stockMonthlySettle/create */
export async function createUsingPOST(
  params: {
    // query
    /** 结算月份 */
    settleMonth?: number;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockMonthlySettle/create', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** （旧版）存货月结详情 POST /web/wms/stockMonthlySettle/detail */
export async function detailUsingPOST(
  body: WMS.StockMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockMonthlySettleDetailVO_>('/web/wms/stockMonthlySettle/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出月结详情-含税金额报表 POST /web/wms/stockMonthlySettle/exportDetail */
export async function exportDetailUsingPOST(
  body: WMS.StockMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockMonthlySettle/exportDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出月结详情-不含税金额报表 POST /web/wms/stockMonthlySettle/exportNoTaxAmtDetail */
export async function exportNoTaxAmtDetailUsingPOST(
  body: WMS.StockMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockMonthlySettle/exportNoTaxAmtDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取月结列表 POST /web/wms/stockMonthlySettle/list */
export async function listUsingPOST(body: WMS.PageQuery, options?: { [key: string]: any }) {
  return request<WMS.PaginationStockMonthlySettleVO_>('/web/wms/stockMonthlySettle/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取库龄月结列表 POST /web/wms/stockMonthlySettle/listStockAge */
export async function listStockAgeUsingPOST(body: WMS.PageQuery, options?: { [key: string]: any }) {
  return request<WMS.PaginationStockMonthlySettleVO_>('/web/wms/stockMonthlySettle/listStockAge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 存货月结详情 POST /web/wms/stockMonthlySettle/queryStatsDetail */
export async function queryStatsDetailUsingPOST(
  body: WMS.StockMonthlySettleDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockMonthlySettleStatsDetailVO_>(
    '/web/wms/stockMonthlySettle/queryStatsDetail',
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

/** 获取结算月份 GET /web/wms/stockMonthlySettle/validateAndGetSettledMonth */
export async function validateAndGetSettledMonthUsingGET(options?: { [key: string]: any }) {
  return request<number>('/web/wms/stockMonthlySettle/validateAndGetSettledMonth', {
    method: 'GET',
    ...(options || {}),
  });
}
