// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑采购预付申请单 PUT /web/po/prepay/apply */
export async function editUsingPUT(body: PO.PrepayApplyUpdateVO, options?: { [key: string]: any }) {
  return request<string>('/web/po/prepay/apply', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增采购预付申请单 POST /web/po/prepay/apply */
export async function saveUsingPOST(
  body: PO.PrepayApplyCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/prepay/apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购预付申请单取消 GET /web/po/prepay/apply/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/prepay/apply/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 采购预付申请单审核 POST /web/po/prepay/apply/check */
export async function checkUsingPOST(body: PO.ApplyCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/prepay/apply/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出采购预付申请单PDF POST /web/po/prepay/apply/export-pdf/${param0} */
export async function exportPdfUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string>(`/web/po/prepay/apply/export-pdf/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询采购预付申请单 POST /web/po/prepay/apply/query */
export async function queryUsingPOST(
  body: PO.PrepayApplyPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPrepayApplyVO_>('/web/po/prepay/apply/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购预付申请单撤审 POST /web/po/prepay/apply/revoke/${param0} */
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
  return request<boolean>(`/web/po/prepay/apply/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取采购预付申请单 GET /web/po/prepay/apply/${param0} */
export async function getUsingGET(
  params: {
    // query
    /** clearPaid */
    clearPaid?: boolean;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.PrepayApplyInfoVO>(`/web/po/prepay/apply/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
