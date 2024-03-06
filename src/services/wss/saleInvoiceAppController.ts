// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增销售发票单（蓝字+红字） POST /web/wss/sale-invoice-app/applyBlue */
export async function applyBlueUsingPOST(
  body: WSS.SaleInvoiceAppBlueUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-invoice-app/applyBlue', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发票登记-录入发票（蓝字+红字），原有接口上作调整 POST /web/wss/sale-invoice-app/applyRed */
export async function applyRedUsingPOST(
  body: WSS.SaleInvoiceAppRedUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-invoice-app/applyRed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增红冲发票 POST /web/wss/sale-invoice-app/applyRedOff */
export async function applyRedOffUsingPOST(
  body: WSS.SaleInvoiceAppRedOffUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-invoice-app/applyRedOff', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 勾稽发票并提审（录入红字、录入蓝字、录入红冲） POST /web/wss/sale-invoice-app/articulationRed */
export async function articulationRedUsingPOST(
  params: {
    // query
    /** 发票单据编号 */
    billId?: string;
    /** 提审备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.ArticulationResultVO>('/web/wss/sale-invoice-app/articulationRed', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 取消 POST /web/wss/sale-invoice-app/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice-app/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核、撤销审核 POST /web/wss/sale-invoice-app/check */
export async function checkUsingPOST(
  body: WSS.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice-app/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑销售发票单（蓝字+红字） POST /web/wss/sale-invoice-app/editBlue */
export async function editBlueUsingPOST(
  body: WSS.SaleInvoiceAppBlueUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice-app/editBlue', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑登记发票单（蓝字+红字），原有接口上作调整 POST /web/wss/sale-invoice-app/editRed */
export async function editRedUsingPOST(
  body: WSS.SaleInvoiceAppRedUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice-app/editRed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑红冲发票 POST /web/wss/sale-invoice-app/editRedOff */
export async function editRedOffUsingPOST(
  body: WSS.SaleInvoiceAppRedOffUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice-app/editRedOff', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出 POST /web/wss/sale-invoice-app/export */
export async function exportUsingPOST(
  body: WSS.SaleInvoiceAppVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-invoice-app/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取销售发票单（红、蓝） GET /web/wss/sale-invoice-app/get */
export async function getUsingGET(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleInvoiceAppExpandVO>('/web/wss/sale-invoice-app/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据Id获取红冲发票 GET /web/wss/sale-invoice-app/getRedOff */
export async function getRedOffUsingGET(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleInvoiceRedOffVO>('/web/wss/sale-invoice-app/getRedOff', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 销售发票申请/登记列表 POST /web/wss/sale-invoice-app/list */
export async function listUsingPOST(
  body: WSS.SaleInvoiceAppVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSaleInvoiceAppVO_>('/web/wss/sale-invoice-app/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 红冲获取销售开票列表 POST /web/wss/sale-invoice-app/listInvoice */
export async function listInvoiceUsingPOST(
  body: WSS.SaleInvoiceVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSaleInvoiceVO_>('/web/wss/sale-invoice-app/listInvoice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取销售发票单（蓝字、红字）操作日志列表 GET /web/wss/sale-invoice-app/listLog */
export async function listLogUsingGET(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleBillLogVO[]>('/web/wss/sale-invoice-app/listLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取原单据列表（销售发票（红字）用到）-弃用 POST /web/wss/sale-invoice-app/listOriginBill */
export async function listOriginBillUsingPOST(
  body: WSS.OriginBillVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationOriginBillVO_>('/web/wss/sale-invoice-app/listOriginBill', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据原单号获取原单据明细（销售发票（红字）用到）-弃用 POST /web/wss/sale-invoice-app/listOriginBillDetail */
export async function listOriginBillDetailUsingPOST(
  body: WSS.OriginBillSelectVO[],
  options?: { [key: string]: any },
) {
  return request<WSS.SaleInvoiceAppDetailVO[]>('/web/wss/sale-invoice-app/listOriginBillDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提审 POST /web/wss/sale-invoice-app/submitReview */
export async function submitReviewUsingPOST(
  params: {
    // query
    /** 发票单据编号 */
    billId?: string;
    /** 提审备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice-app/submitReview', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
