// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/po/supplier-change/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/supplier-change/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核 POST /web/po/supplier-change/check */
export async function checkUsingPOST(body: PO.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/supplier-change/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /web/po/supplier-change/create */
export async function createUsingPOST(
  body: PO.SupplierInfoChangeVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/supplier-change/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下载供应商首营审批表PDF GET /web/po/supplier-change/down-supplier-first-pdf */
export async function downSupplierFirstPdfUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/web/po/supplier-change/down-supplier-first-pdf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 首营审批流程 POST /web/po/supplier-change/first-instance */
export async function FlowInstanceProcessByFirstUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.PoFlowInstanceProcessVO[]>('/web/po/supplier-change/first-instance', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 首营供应商审批列表 POST /web/po/supplier-change/first-list */
export async function firstListUsingPOST(
  body: PO.SupplierInfoChangePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationSupplierInfoChangeListVO_>('/web/po/supplier-change/first-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询分页列表 POST /web/po/supplier-change/list */
export async function listUsingPOST(
  body: PO.SupplierInfoChangePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationSupplierInfoChangeListVO_>('/web/po/supplier-change/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤审 POST /web/po/supplier-change/revoke/${param0} */
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
  return request<boolean>(`/web/po/supplier-change/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 更新 POST /web/po/supplier-change/update */
export async function updateUsingPOST(
  body: PO.SupplierInfoChangeVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/supplier-change/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 验证资料变更信息 POST /web/po/supplier-change/verify-information-change */
export async function verifyInformationChangeUsingPOST(
  body: PO.SupplierChangeVerifyVO,
  options?: { [key: string]: any },
) {
  return request<PO.SupplierChangeExistVO>('/web/po/supplier-change/verify-information-change', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /web/po/supplier-change/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.SupplierInfoChangeVO>(`/web/po/supplier-change/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
