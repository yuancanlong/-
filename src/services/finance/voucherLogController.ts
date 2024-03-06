// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 单位往来账详情 GET /web/finance/voucherLog/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** 主键 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<FINANCE.PartnerVO>(`/web/finance/voucherLog/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 往来账金额统计 POST /web/finance/voucherLog/getVoucherLogStatistics */
export async function getVoucherLogStatisticsUsingPOST(
  body: FINANCE.VoucherLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.VoucherLogStatisticsVO>(
    '/web/finance/voucherLog/getVoucherLogStatistics',
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

/** 单位往来账列表 POST /web/finance/voucherLog/query */
export async function queryUsingPOST(
  body: FINANCE.PartnerPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationPartnerDetailVO_>('/web/finance/voucherLog/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询凭证流水 POST /web/finance/voucherLog/queryVoucherLog */
export async function queryVoucherLogUsingPOST(
  body: FINANCE.VoucherLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationVoucherLogVO_>('/web/finance/voucherLog/queryVoucherLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
