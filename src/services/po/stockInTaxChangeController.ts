// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑入库税率变更单 PUT /web/po/stockInTaxChange */
export async function editUsingPUT(
  body: PO.StockInTaxChangeUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/stockInTaxChange', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增入库税率变更单 POST /web/po/stockInTaxChange */
export async function saveUsingPOST(
  body: PO.StockInTaxChangeCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/stockInTaxChange', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 入库税率变更单取消 GET /web/po/stockInTaxChange/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/stockInTaxChange/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 入库税率变更单审核 POST /web/po/stockInTaxChange/check/${param0} */
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
  return request<boolean>(`/web/po/stockInTaxChange/check/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 导出调整单 POST /web/po/stockInTaxChange/export-fix-excel */
export async function exportFixExcelUsingPOST(
  body: PO.StockInTaxChangePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/stockInTaxChange/export-fix-excel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询入库税率变更单 POST /web/po/stockInTaxChange/query */
export async function queryUsingPOST(
  body: PO.StockInTaxChangePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationStockInTaxChangeVO_>('/web/po/stockInTaxChange/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 入库税率变更单撤审 POST /web/po/stockInTaxChange/revoke/${param0} */
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
  return request<boolean>(`/web/po/stockInTaxChange/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取入库税率变更单 GET /web/po/stockInTaxChange/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.StockInTaxChangeInfoVO>(`/web/po/stockInTaxChange/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
