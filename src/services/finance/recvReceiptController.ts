// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/finance/recvReceipt/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/recvReceipt/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量取消 POST /web/finance/recvReceipt/cancelMultiple */
export async function cancelMultipleUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/finance/recvReceipt/cancelMultiple', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审核 POST /web/finance/recvReceipt/check */
export async function checkUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/recvReceipt/check', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量审核 POST /web/finance/recvReceipt/checkMultiple */
export async function checkMultipleUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/finance/recvReceipt/checkMultiple', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 单据详情 GET /web/finance/recvReceipt/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** 单据编号 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<FINANCE.RecvReceiptVO>(`/web/finance/recvReceipt/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 批量导入 POST /web/finance/recvReceipt/importData */
export async function importDataUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<FINANCE.ImportResultVO>('/web/finance/recvReceipt/importData', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加单据 POST /web/finance/recvReceipt/insert */
export async function insertUsingPOST(
  body: FINANCE.RecvReceiptVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/finance/recvReceipt/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页列表 POST /web/finance/recvReceipt/list */
export async function listUsingPOST(
  body: FINANCE.RecvReceiptVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationListRecvReceiptVO_>('/web/finance/recvReceipt/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 收款日志 POST /web/finance/recvReceipt/listLog */
export async function listLogUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<FINANCE.RecvReceiptLogVO[]>('/web/finance/recvReceipt/listLog', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新修改 POST /web/finance/recvReceipt/update */
export async function updateUsingPOST(
  body: FINANCE.RecvReceiptVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/recvReceipt/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
