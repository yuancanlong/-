// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wss/income-cost/export */
export async function exportUsingPOST(
  body: WSS.IncomeCostExportVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/income-cost/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 月结报表-导出商品收入成本报表（客商、商品） POST /web/wss/income-cost/exportMS */
export async function exportMSUsingPOST(
  body: WSS.IncomeCostMSExportVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/income-cost/exportMS', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取客户收入成本报表 POST /web/wss/income-cost/list */
export async function listUsingPOST(
  body: WSS.IncomeCostVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationIncomeCostVO_>('/web/wss/income-cost/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 月结报表-获取商品收入成本报表（客商） POST /web/wss/income-cost/listCus */
export async function listCusUsingPOST(
  body: WSS.IncomeCostMSVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationIncomeCostMSVO_>('/web/wss/income-cost/listCus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 月结报表-获取商品收入成本报表（商品） POST /web/wss/income-cost/listWare */
export async function listWareUsingPOST(
  body: WSS.IncomeCostMSVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationIncomeCostDetailVO_>('/web/wss/income-cost/listWare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取客户收入成本汇总合计 POST /web/wss/income-cost/sumAll */
export async function sumAllUsingPOST(body: WSS.IncomeCostSumVO, options?: { [key: string]: any }) {
  return request<WSS.IncomeCostVO>('/web/wss/income-cost/sumAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 月结报表-获取商品收入成本（客商、商品）汇总合计 POST /web/wss/income-cost/sumAllMS */
export async function sumAllMSUsingPOST(
  body: WSS.IncomeCostSumMSVO,
  options?: { [key: string]: any },
) {
  return request<WSS.IncomeCostVO>('/web/wss/income-cost/sumAllMS', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
