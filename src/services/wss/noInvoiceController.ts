// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wss/no-invoice/export */
export async function exportUsingPOST(
  params: {
    // query
    /** 客户编码，可为空 */
    cusId?: string;
    /** 类型（1：导出汇总；2：导出明细），必填 */
    type?: number;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/no-invoice/export', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 月结报表-导出客户发出商品报表 POST /web/wss/no-invoice/exportMS */
export async function exportMSUsingPOST(
  params: {
    // query
    /** 客户编码，可为空 */
    cusId?: string;
    /** 月份（格式yyyy-MM），必填 */
    settlementMonth?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/no-invoice/exportMS', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取发出商品余额报表 POST /web/wss/no-invoice/list */
export async function listUsingPOST(
  body: WSS.NoInvoiceVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationNoInvoiceVO_>('/web/wss/no-invoice/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取月结报表-客户发出商品报表 POST /web/wss/no-invoice/listMS */
export async function listMSUsingPOST(
  body: WSS.NoInvoiceMSVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationNoInvoiceMSVO_>('/web/wss/no-invoice/listMS', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取发出商品余额汇总合计 GET /web/wss/no-invoice/sumAll */
export async function sumAllUsingGET(
  params: {
    // query
    /** 客户编码，可为空 */
    cusId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.NoInvoiceVO>('/web/wss/no-invoice/sumAll', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 月结报表-获取客户发出商品报表汇总合计 GET /web/wss/no-invoice/sumAllMS */
export async function sumAllMSUsingGET(
  params: {
    // query
    /** 客户编码，可为空 */
    cusId?: string;
    /** 月份（格式yyyy-MM），必填 */
    settlementMonth?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.NoInvoiceMSVO>('/web/wss/no-invoice/sumAllMS', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
