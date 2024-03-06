// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 明细 GET /web/wms/saleQuick/detail */
export async function detailUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.SaleQuickStockOutDetailVO>('/web/wms/saleQuick/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 下载PDF GET /web/wms/saleQuick/downloadPdf */
export async function downloadPdfUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/web/wms/saleQuick/downloadPdf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出 POST /web/wms/saleQuick/export */
export async function exportUsingPOST(
  body: WMS.SaleQuickPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/saleQuick/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表 POST /web/wms/saleQuick/list */
export async function listUsingPOST(
  body: WMS.SaleQuickPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationSaleQuickStockOutVO_>('/web/wms/saleQuick/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 复核 POST /web/wms/saleQuick/recheck/${param0} */
export async function recheckUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/saleQuick/recheck/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
