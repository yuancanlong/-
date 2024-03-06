// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/wss/sale-price-adj/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-price-adj/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核、撤销审核 POST /web/wss/sale-price-adj/check */
export async function checkUsingPOST(
  body: WSS.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-price-adj/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增销售调价单 POST /web/wss/sale-price-adj/create */
export async function createUsingPOST(
  body: WSS.SalePriceAdjAppUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-price-adj/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑销售调价单 POST /web/wss/sale-price-adj/edit */
export async function editUsingPOST(
  body: WSS.SalePriceAdjAppUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-price-adj/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表导出调整单 POST /web/wss/sale-price-adj/export */
export async function exportUsingPOST(
  body: WSS.SalePriceAdjExportVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-price-adj/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情导出调价单PDF POST /web/wss/sale-price-adj/exportDetail */
export async function exportDetailUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-price-adj/exportDetail', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据单据编号获取销售调价单 GET /web/wss/sale-price-adj/get */
export async function getUsingGET(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SalePriceAdjAppExpandVO>('/web/wss/sale-price-adj/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取销售调价单列表 POST /web/wss/sale-price-adj/list */
export async function listUsingPOST(
  body: WSS.SalePriceAdjAppVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSalePriceAdjAppVO_>('/web/wss/sale-price-adj/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取操作日志列表 GET /web/wss/sale-price-adj/listLog */
export async function listLogUsingGET(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleBillLogVO[]>('/web/wss/sale-price-adj/listLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取选择调价商品列表 POST /web/wss/sale-price-adj/listOriginBillDetail */
export async function listOriginBillDetailUsingPOST(
  body: WSS.OriginBillDetailVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationOriginBillDetailVO_>(
    '/web/wss/sale-price-adj/listOriginBillDetail',
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

/** 提审 POST /web/wss/sale-price-adj/submitReview */
export async function submitReviewUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id?: string;
    /** 提审备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-price-adj/submitReview', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
