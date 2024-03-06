// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/finance/recvWriteoff/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 收款核销单编码 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/recvWriteoff/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核 POST /web/finance/recvWriteoff/check */
export async function checkUsingPOST(
  body: FINANCE.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/recvWriteoff/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增收款核销单 POST /web/finance/recvWriteoff/create */
export async function createUsingPOST(
  body: FINANCE.RecvWriteoffCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/finance/recvWriteoff/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出PDF POST /web/finance/recvWriteoff/exportPdf */
export async function exportPdfUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/finance/recvWriteoff/exportPdf', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取收款核销单(支持应收/应付相抵) GET /web/finance/recvWriteoff/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** 收款核销单编码 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<FINANCE.RecvWriteoffContentVO>(`/web/finance/recvWriteoff/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 未核销的应收单/应付单 POST /web/finance/recvWriteoff/listNoWriteoffReceivable */
export async function listNoWriteoffReceivableUsingPOST(
  params: {
    // query
    /** 收款核销单ID，可空 */
    id?: string;
    /** 最大创建时间，可空 */
    maxCreateTime?: string;
    /** 最小创建时间，可空 */
    minCreateTime?: string;
    /** 单位编码，必填 */
    payerId: string;
  },
  options?: { [key: string]: any },
) {
  return request<FINANCE.OptionalRecvReceivableOrPayableVO>(
    '/web/finance/recvWriteoff/listNoWriteoffReceivable',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 未核销的收款单 POST /web/finance/recvWriteoff/listNoWriteoffRecvReceipt */
export async function listNoWriteoffRecvReceiptUsingPOST(
  params: {
    // query
    /** 收款核销单ID，可空 */
    id?: string;
    /** 最大收款时间，可空 */
    maxCreateTime?: string;
    /** 最小收款时间，可空 */
    minCreateTime?: string;
    /** 单位编码，必填 */
    payerId: string;
  },
  options?: { [key: string]: any },
) {
  return request<FINANCE.OptionalRecvReceiptVO>(
    '/web/finance/recvWriteoff/listNoWriteoffRecvReceipt',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 收款核销单分页查询 POST /web/finance/recvWriteoff/query */
export async function queryUsingPOST(
  body: FINANCE.RecvWriteoffPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationRecvWriteoffVO_>('/web/finance/recvWriteoff/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/finance/recvWriteoff/revoke */
export async function revokeUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billCode?: string;
    /** 备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/recvWriteoff/revoke', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 单据提审 POST /web/finance/recvWriteoff/submitReview */
export async function submitReviewUsingPOST(
  params: {
    // query
    /** 收款核销单编码 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/recvWriteoff/submitReview', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改收款核销单 POST /web/finance/recvWriteoff/update */
export async function updateUsingPOST(
  body: FINANCE.RecvWriteoffCreateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/recvWriteoff/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
