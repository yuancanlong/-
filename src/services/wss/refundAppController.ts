// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/wss/refund-app/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 申请单号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/refund-app/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核、撤销审核 POST /web/wss/refund-app/check */
export async function checkUsingPOST(
  body: WSS.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/refund-app/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增退款申请单 POST /web/wss/refund-app/create */
export async function createUsingPOST(
  body: WSS.RefundAppUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/refund-app/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑退款申请单 POST /web/wss/refund-app/edit */
export async function editUsingPOST(body: WSS.RefundAppUpdateVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wss/refund-app/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出PDF POST /web/wss/refund-app/exportPdf */
export async function exportPdfUsingPOST(
  params: {
    // query
    /** 申请单号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/refund-app/exportPdf', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据申请单号获取详情 GET /web/wss/refund-app/get */
export async function getUsingGET(
  params: {
    // query
    /** 申请单号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.RefundAppExpandVO>('/web/wss/refund-app/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取退款申请单列表 POST /web/wss/refund-app/list */
export async function listUsingPOST(
  body: WSS.RefundAppVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationRefundAppVO_>('/web/wss/refund-app/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 预收款抵扣选择列表 POST /web/wss/refund-app/listAdvanceReceipt */
export async function listAdvanceReceiptUsingPOST(
  body: WSS.AdvanceReceiptParameterVO,
  options?: { [key: string]: any },
) {
  return request<WSS.AdvanceReceiptVO[]>('/web/wss/refund-app/listAdvanceReceipt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取操作日志列表 GET /web/wss/refund-app/listLog */
export async function listLogUsingGET(
  params: {
    // query
    /** 申请单号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleBillLogVO[]>('/web/wss/refund-app/listLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 已选的预收款单(应付单详情中调用) POST /web/wss/refund-app/listReceivedDetail */
export async function listAdvanceReceiptUsingPOST_2(
  params: {
    // query
    /** 批发退款单号 */
    sourceBizId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.RefundAppAdvancesReceivedDetailVO[]>(
    '/web/wss/refund-app/listReceivedDetail',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 提审 POST /web/wss/refund-app/submitReview */
export async function submitReviewUsingPOST(
  params: {
    // query
    /** 申请单号 */
    id?: string;
    /** 提审备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/refund-app/submitReview', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
