// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wss/balance-log/export */
export async function exportUsingPOST(
  params: {
    // query
    /** 纳税人识别号，可为空 */
    taxPayerCode?: string;
    /** 类型（1：导出汇总；2：导出明细），必填 */
    type?: number;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/balance-log/export', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 月结报表-导出 POST /web/wss/balance-log/exportMS */
export async function exportMSUsingPOST(
  params: {
    // query
    /** 月份（格式yyyy-MM-dd），必填 */
    settlementMonth?: string;
    /** 纳税人识别号，可为空 */
    taxPayerCode?: string;
    /** 类型（1：导出汇总；2：导出明细），必填 */
    type?: number;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/balance-log/exportMS', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取预收余额报表 POST /web/wss/balance-log/list */
export async function listUsingPOST(
  body: WSS.BalanceLogVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationBalanceLogVO_>('/web/wss/balance-log/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 月结报表-获取预收账款报表 POST /web/wss/balance-log/listMS */
export async function listMSUsingPOST(
  body: WSS.BalanceLogVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationBalanceLogMSVO_>('/web/wss/balance-log/listMS', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取预收余额汇总合计金额 GET /web/wss/balance-log/sumAll */
export async function sumAllUsingGET(
  params: {
    // query
    /** 纳税人识别号，可为空 */
    taxPayerCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.BalanceLogVO>('/web/wss/balance-log/sumAll', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 月结报表-获取预收账款报表汇总合计金额 GET /web/wss/balance-log/sumAllMS */
export async function sumAllMSUsingGET(
  params: {
    // query
    /** 月份（格式yyyy-MM），必填 */
    settlementMonth?: string;
    /** 纳税人识别号，可为空 */
    taxPayerCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.BalanceLogMSVO>('/web/wss/balance-log/sumAllMS', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
