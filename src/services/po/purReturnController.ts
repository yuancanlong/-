// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/po/pur/return/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 采退服务单id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/pur/return/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核 POST /web/po/pur/return/check */
export async function checkUsingPOST(body: PO.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/pur/return/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建 POST /web/po/pur/return/create */
export async function createOrderUsingPOST(
  params: {
    // query
    /** 退货类型 0 原单 1 无原单 */
    returnType?: number;
  },
  body: PO.PurReturnVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/pur/return/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询详情 GET /web/po/pur/return/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
    /** isUpdateCostPrice */
    isUpdateCostPrice?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<PO.PurReturnVO>('/web/po/pur/return/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询分页列表 POST /web/po/pur/return/list */
export async function listPageUsingPOST(
  body: PO.PurReturnVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPurReturnListVO_>('/web/po/pur/return/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询库存商品 POST /web/po/pur/return/page-query-inbound */
export async function pageQueryInboundUsingPOST(
  body: PO.StockInboundPageQueryDTO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationStockDTO_>('/web/po/pur/return/page-query-inbound', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤审 POST /web/po/pur/return/revoke/${param0} */
export async function revokeUsingPOST(
  params: {
    // query
    /** remark */
    remark?: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/pur/return/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 更新 POST /web/po/pur/return/update */
export async function updateOrderUsingPOST(body: PO.PurReturnVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/pur/return/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
