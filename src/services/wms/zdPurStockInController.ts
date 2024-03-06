// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 采购直调入库单取消 GET /web/wms/zdPurStockIn/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/zdPurStockIn/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 采购直调入库单审核 POST /web/wms/zdPurStockIn/check/${param0} */
export async function checkUsingPOST(
  params: {
    // query
    /** pass */
    pass: boolean;
    /** remark */
    remark?: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/zdPurStockIn/check/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 采购直调入库单导出 POST /web/wms/zdPurStockIn/export */
export async function exportUsingPOST(
  body: WMS.ZdPurStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/zdPurStockIn/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询采购直调入库单 POST /web/wms/zdPurStockIn/query */
export async function queryUsingPOST(
  body: WMS.ZdPurStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationZdPurStockInVO_>('/web/wms/zdPurStockIn/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购直调入库单撤销 POST /web/wms/zdPurStockIn/revoke/${param0} */
export async function revokeUsingPOST(
  params: {
    // query
    /** remark */
    remark?: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/zdPurStockIn/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取采购直调入库单 GET /web/wms/zdPurStockIn/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.ZdPurStockInInfoVO>(`/web/wms/zdPurStockIn/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
