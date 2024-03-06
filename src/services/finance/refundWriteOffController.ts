// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 退款核销取消 POST /web/finance/refundWriteOff/cancel */
export async function cancelUsingPOST(
  body: FINANCE.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/refundWriteOff/cancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退款核销审核 POST /web/finance/refundWriteOff/check */
export async function checkUsingPOST(
  body: FINANCE.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/refundWriteOff/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增采购退款核销 POST /web/finance/refundWriteOff/create */
export async function createUsingPOST(
  body: FINANCE.RefundWriteOffVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/finance/refundWriteOff/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出PDF POST /web/finance/refundWriteOff/exportPdf */
export async function exportPdfUsingPOST(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/finance/refundWriteOff/exportPdf', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 采购退款核销详情 GET /web/finance/refundWriteOff/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<FINANCE.RefundWriteOffVO>(`/web/finance/refundWriteOff/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询纳税人未全部核销的收款单列表 POST /web/finance/refundWriteOff/listNoWriteOff */
export async function listNoWriteOffUsingPOST(
  body: FINANCE.ListRecvReceiptVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.NoWriteOffRecvReceiptVO[]>('/web/finance/refundWriteOff/listNoWriteOff', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询采购退款核销列表 POST /web/finance/refundWriteOff/query */
export async function queryUsingPOST(
  body: FINANCE.RefundWriteOffPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationRefundWriteOffVO_>('/web/finance/refundWriteOff/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/finance/refundWriteOff/revoke */
export async function revokeUsingPOST(
  body: FINANCE.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/refundWriteOff/revoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退款核销提审 POST /web/finance/refundWriteOff/submitReview */
export async function submitReviewUsingPOST(
  body: FINANCE.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/refundWriteOff/submitReview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
