// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/wss/sale-return-service-without-original/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 退货申请单号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-return-service-without-original/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核 POST /web/wss/sale-return-service-without-original/check */
export async function checkUsingPOST(
  body: WSS.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-return-service-without-original/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增退货申请单 POST /web/wss/sale-return-service-without-original/create */
export async function createUsingPOST(
  body: WSS.SaleReturnWithoutOriginalVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-return-service-without-original/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出（导出所选（只传勾选的订单id），导出当前条件（传搜索的字段）） POST /web/wss/sale-return-service-without-original/export */
export async function exportUsingPOST(
  body: WSS.SaleReturnExportVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-return-service-without-original/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退货申请单详情 GET /web/wss/sale-return-service-without-original/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleReturnServiceVO>('/web/wss/sale-return-service-without-original/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取申请退货单列表 POST /web/wss/sale-return-service-without-original/list */
export async function listUsingPOST(
  body: WSS.SaleReturnServiceVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationListSaleReturnServiceVO_>(
    '/web/wss/sale-return-service-without-original/list',
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

/** 查询申请退货商品列表 POST /web/wss/sale-return-service-without-original/listOrderWare */
export async function listOrderWareUsingPOST(
  body: WSS.SaleReturnWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSaleReturnWareVO_>(
    '/web/wss/sale-return-service-without-original/listOrderWare',
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

/** 撤销审核 POST /web/wss/sale-return-service-without-original/revoke */
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
  return request<boolean>('/web/wss/sale-return-service-without-original/revoke', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 单据提审 POST /web/wss/sale-return-service-without-original/submitReview */
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
  return request<boolean>('/web/wss/sale-return-service-without-original/submitReview', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改退货申请单 POST /web/wss/sale-return-service-without-original/update */
export async function updateUsingPOST(
  body: WSS.SaleReturnWithoutOriginalVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-return-service-without-original/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
