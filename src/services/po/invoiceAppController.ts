// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 修改数据 PUT /web/po/invoice/app */
export async function editUsingPUT(body: PO.InvoiceAppUpdateVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/invoice/app', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存数据 POST /web/po/invoice/app */
export async function saveUsingPOST(body: PO.InvoiceAppCreateVO, options?: { [key: string]: any }) {
  return request<string>('/web/po/invoice/app', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发票勾稽 POST /web/po/invoice/app/articulation/${param0} */
export async function articulationUsingPOST(
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
  return request<PO.InvoiceAppDetailVO[]>(`/web/po/invoice/app/articulation/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 发票勾稽单取消 POST /web/po/invoice/app/cancel/${param0} */
export async function cancelUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/invoice/app/cancel/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 发票勾稽审核 POST /web/po/invoice/app/check/${param0} */
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
  return request<PO.InventoryAmountChangeResult[]>(`/web/po/invoice/app/check/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 查询详情-删除相关被占用单据 GET /web/po/invoice/app/edit/${param0} */
export async function getForEditUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.InvoiceAppVO>(`/web/po/invoice/app/edit/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导出 POST /web/po/invoice/app/export */
export async function exportUsingPOST(
  body: PO.InvoiceAppPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/invoice/app/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出勾稽发票申请单PDF POST /web/po/invoice/app/export-apply-bill */
export async function exportUsingPOST_2(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/invoice/app/export-apply-bill', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出调整单数据 POST /web/po/invoice/app/export-fix */
export async function exportFixDataUsingPOST(
  body: PO.InvoiceAppPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/invoice/app/export-fix', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发票勾稽分页查询 POST /web/po/invoice/app/list */
export async function listUsingPOST(
  body: PO.InvoiceAppPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationInvoiceAppListVO_>('/web/po/invoice/app/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审核日志 GET /web/po/invoice/app/log/${param0} */
export async function logUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.InvoiceAppLogVO[]>(`/web/po/invoice/app/log/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 发票勾稽单撤审 POST /web/po/invoice/app/revoke/${param0} */
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
  return request<boolean>(`/web/po/invoice/app/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 查询详情 GET /web/po/invoice/app/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.InvoiceAppVO>(`/web/po/invoice/app/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
