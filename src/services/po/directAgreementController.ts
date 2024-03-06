// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑直调协议 PUT /web/po/directAgreement */
export async function editUsingPUT(
  body: PO.DirectAgreementUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/directAgreement', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增直调协议 POST /web/po/directAgreement */
export async function saveUsingPOST(
  body: PO.DirectAgreementCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/directAgreement', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 直调协议取消 GET /web/po/directAgreement/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/directAgreement/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 直调协议审核 POST /web/po/directAgreement/check/${param0} */
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
  return request<boolean>(`/web/po/directAgreement/check/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 查询直调协议 POST /web/po/directAgreement/query */
export async function queryUsingPOST(
  body: PO.DirectAgreementPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationDirectAgreementVO_>('/web/po/directAgreement/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 直调协议撤审 POST /web/po/directAgreement/revoke/${param0} */
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
  return request<boolean>(`/web/po/directAgreement/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取直调协议 GET /web/po/directAgreement/${param0} */
export async function getUsingGET(
  params: {
    // query
    /** 是否展示商品标识 */
    isTag?: boolean;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.DirectAgreementInfoVO>(`/web/po/directAgreement/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
