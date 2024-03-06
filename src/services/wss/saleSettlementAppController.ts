// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/wss/sale-settlement-app/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-settlement-app/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核、撤销审核 POST /web/wss/sale-settlement-app/check */
export async function checkUsingPOST(
  body: WSS.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-settlement-app/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增单据 POST /web/wss/sale-settlement-app/create */
export async function createUsingPOST(
  body: WSS.SaleSettlementAppUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-settlement-app/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除已被提审的发票申请单 POST /web/wss/sale-settlement-app/deleteChecked */
export async function deleteCheckedUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-settlement-app/deleteChecked', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑单据 POST /web/wss/sale-settlement-app/edit */
export async function editUsingPOST(
  body: WSS.SaleSettlementAppUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-settlement-app/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出PDF POST /web/wss/sale-settlement-app/exportPdf */
export async function exportPdfUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-settlement-app/exportPdf', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据单据编号获取销售结算申请单详情 GET /web/wss/sale-settlement-app/get */
export async function getUsingGET(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleSettlementAppExpandVO>('/web/wss/sale-settlement-app/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取销售结算申请单列表 POST /web/wss/sale-settlement-app/list */
export async function listUsingPOST(
  body: WSS.SaleSettlementAppVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSaleSettlementAppVO_>('/web/wss/sale-settlement-app/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 预收款抵扣选择列表 POST /web/wss/sale-settlement-app/listAdvanceReceipt */
export async function listAdvanceReceiptUsingPOST(
  body: WSS.AdvanceReceiptParameterVO,
  options?: { [key: string]: any },
) {
  return request<WSS.AdvanceReceiptVO[]>('/web/wss/sale-settlement-app/listAdvanceReceipt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据（销售发票）申请单号获取明细 GET /web/wss/sale-settlement-app/listBySaleInvoiceAppId */
export async function listBySaleInvoiceAppIdUsingGET(
  params: {
    // query
    /** 申请单号 */
    saleInvoiceAppId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleInvoiceAppDetailVO[]>(
    '/web/wss/sale-settlement-app/listBySaleInvoiceAppId',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 根据id获取发票明细 POST /web/wss/sale-settlement-app/listDetailById */
export async function listDetailByIdUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleSettlementAppDetailVO[]>('/web/wss/sale-settlement-app/listDetailById', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据申请单号获取发票明细 POST /web/wss/sale-settlement-app/listDetailByIds */
export async function listDetailByIdsUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<WSS.SaleSettlementAppDetailVO[]>('/web/wss/sale-settlement-app/listDetailByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取提取发票申请单列表 POST /web/wss/sale-settlement-app/listInvoiceApp */
export async function listInvoiceAppUsingPOST(
  body: WSS.InvoiceAppVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSaleSettlementAppDetailVO_>(
    '/web/wss/sale-settlement-app/listInvoiceApp',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取操作日志列表 GET /web/wss/sale-settlement-app/listLog */
export async function listLogUsingGET(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleBillLogVO[]>('/web/wss/sale-settlement-app/listLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 提审 POST /web/wss/sale-settlement-app/submitReview */
export async function submitReviewUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
    /** 提审备注 */
    remark?: string;
    /** 结算账户编号 */
    settlementAccountId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-settlement-app/submitReview', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
