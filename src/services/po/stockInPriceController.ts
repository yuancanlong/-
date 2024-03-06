// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑入库调价单 PUT /web/po/stockInPrice */
export async function editUsingPUT(
  body: PO.StockInPriceUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/stockInPrice', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增入库调价单 POST /web/po/stockInPrice */
export async function saveUsingPOST(
  body: PO.StockInPriceCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/stockInPrice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 入库调价单取消 GET /web/po/stockInPrice/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/stockInPrice/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 入库调价单审核 POST /web/po/stockInPrice/check */
export async function checkUsingPOST(body: PO.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/stockInPrice/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出Excel POST /web/po/stockInPrice/export-excel */
export async function exportExcelUsingPOST(
  body: PO.StockInPricePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/stockInPrice/export-excel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出PDF POST /web/po/stockInPrice/export-pdf */
export async function exportUsingPOST(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/stockInPrice/export-pdf', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询入库调价单 POST /web/po/stockInPrice/query */
export async function queryUsingPOST(
  body: PO.StockInPricePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationStockInPriceVO_>('/web/po/stockInPrice/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 入库调价单撤审 POST /web/po/stockInPrice/revoke/${param0} */
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
  return request<boolean>(`/web/po/stockInPrice/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 校验是否已存在调价单 GET /web/po/stockInPrice/verify-changing/${param0} */
export async function verifyChangingUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.StockInPriceHasChangingVO>(`/web/po/stockInPrice/verify-changing/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取入库调价单 GET /web/po/stockInPrice/${param0} */
export async function getUsingGET(
  params: {
    // query
    /** isUpdateCostPrice */
    isUpdateCostPrice?: boolean;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.StockInPriceInfoVO>(`/web/po/stockInPrice/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
