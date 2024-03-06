// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询是否存在可用单据 POST /web/po/prepay/paid/isExistCanUse/${param0} */
export async function isExistCanUseUsingPOST(
  params: {
    // path
    /** supplierId */
    supplierId: string;
  },
  options?: { [key: string]: any },
) {
  const { supplierId: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/prepay/paid/isExistCanUse/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询列表 POST /web/po/prepay/paid/list */
export async function listUsingPOST(
  body: PO.PrepayPaidListQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PrepayPaidVO[]>('/web/po/prepay/paid/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 预付查询列表 POST /web/po/prepay/paid/prepayList */
export async function prepayListUsingPOST(
  body: PO.PrepayPaidListQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PrepayPaidVO[]>('/web/po/prepay/paid/prepayList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /web/po/prepay/paid/query */
export async function queryUsingPOST(
  body: PO.PrepayPaidPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPrepayPaidVO_>('/web/po/prepay/paid/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退款核销查询是否存在可用单据 POST /web/po/prepay/paid/refund/isExistCanUse/${param0} */
export async function refundIsExistCanUseUsingPOST(
  params: {
    // path
    /** supplierId */
    supplierId: string;
  },
  options?: { [key: string]: any },
) {
  const { supplierId: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/prepay/paid/refund/isExistCanUse/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 退款核销查询列表 POST /web/po/prepay/paid/refundList */
export async function refundListUsingPOST(
  body: PO.PrepayPaidListQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PrepayPaidVO[]>('/web/po/prepay/paid/refundList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取详情 GET /web/po/prepay/paid/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.PrepayPaidVO>(`/web/po/prepay/paid/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
