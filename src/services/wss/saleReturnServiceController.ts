// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 申请退货 POST /web/wss/sale-return-service/apply */
export async function applyUsingPOST(
  body: WSS.SaleReturnServiceApplyVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-return-service/apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消 POST /web/wss/sale-return-service/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 退货申请单号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-return-service/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核 POST /web/wss/sale-return-service/check */
export async function checkUsingPOST(
  body: WSS.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-return-service/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检查是否能够发起退货申请 GET /web/wss/sale-return-service/checkCanApply */
export async function checkCanApplyUsingGET(
  params: {
    // query
    /** 订单编码 */
    orderId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleReturnIsResultVO>('/web/wss/sale-return-service/checkCanApply', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出（导出所选（只传勾选的订单id），导出当前条件（传搜索的字段）） POST /web/wss/sale-return-service/export */
export async function exportUsingPOST(
  body: WSS.SaleReturnExportVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-return-service/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退货申请单详情 GET /web/wss/sale-return-service/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleReturnServiceVO>('/web/wss/sale-return-service/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询已有未审核的退货申请单号（没有就是不存在） GET /web/wss/sale-return-service/getExist */
export async function getExistUsingGET(
  params: {
    // query
    /** 订单编码 */
    orderId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-return-service/getExist', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取申请退货单列表 POST /web/wss/sale-return-service/list */
export async function listUsingPOST(
  body: WSS.SaleReturnServiceVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationListSaleReturnServiceVO_>('/web/wss/sale-return-service/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询申请退货商品列表 GET /web/wss/sale-return-service/listOrderWare */
export async function listOrderWareUsingGET(
  params: {
    // query
    /** 订单编码 */
    orderId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleReturnWareVO[]>('/web/wss/sale-return-service/listOrderWare', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/wss/sale-return-service/revoke */
export async function revokeUsingPOST(
  params: {
    // query
    /** 退货申请单号 */
    billCode?: string;
    /** 备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-return-service/revoke', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 单据提审 POST /web/wss/sale-return-service/submitReview */
export async function submitReviewUsingPOST(
  params: {
    // query
    /** 退货申请单号 */
    id: string;
    /** 备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-return-service/submitReview', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
