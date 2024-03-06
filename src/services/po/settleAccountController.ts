// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑采购结算申请单 PUT /web/po/settleAccount */
export async function editUsingPUT(
  body: PO.SettleAccountUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/settleAccount', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增采购结算申请单 POST /web/po/settleAccount */
export async function saveUsingPOST(
  body: PO.SettleAccountCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/settleAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购结算申请单取消 GET /web/po/settleAccount/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/settleAccount/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 采购结算申请单审核 POST /web/po/settleAccount/check/${param0} */
export async function checkUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  body: PO.SettleAccountCheckVO,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/settleAccount/check/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取采购结算申请单-移除被占用的单据 GET /web/po/settleAccount/edit/${param0} */
export async function getForEditUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.SettleAccountInfoVO>(`/web/po/settleAccount/edit/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导出采购结算申请单PDF POST /web/po/settleAccount/export-pdf/${param0} */
export async function exportPdfUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string>(`/web/po/settleAccount/export-pdf/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询采购结算申请单 POST /web/po/settleAccount/query */
export async function queryUsingPOST(
  body: PO.SettleAccountPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationSettleAccountVO_>('/web/po/settleAccount/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购结算申请单撤审 POST /web/po/settleAccount/revoke/${param0} */
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
  return request<boolean>(`/web/po/settleAccount/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取采购结算申请单 GET /web/po/settleAccount/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.SettleAccountInfoVO>(`/web/po/settleAccount/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
