// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/wss/sales-contract/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 合同id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sales-contract/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核、撤销审核 POST /web/wss/sales-contract/check */
export async function checkUsingPOST(
  body: WSS.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sales-contract/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增合同 POST /web/wss/sales-contract/create */
export async function createUsingPOST(
  body: WSS.SalesContractUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sales-contract/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑合同 POST /web/wss/sales-contract/edit */
export async function editUsingPOST(
  body: WSS.SalesContractUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sales-contract/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据合同id获取合同详情 GET /web/wss/sales-contract/get */
export async function getUsingGET(
  params: {
    // query
    /** 合同id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SalesContractExpandVO>('/web/wss/sales-contract/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品导入 POST /web/wss/sales-contract/importWare */
export async function importWareUsingPOST(
  params: {
    // query
    /** 客户编码 */
    cusId?: string;
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.ContractWareImportResultVO>('/web/wss/sales-contract/importWare', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取销售合同列表 POST /web/wss/sales-contract/list */
export async function listUsingPOST(
  body: WSS.SalesContractVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSalesContractVO_>('/web/wss/sales-contract/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取操作日志列表 GET /web/wss/sales-contract/listLog */
export async function listLogUsingGET(
  params: {
    // query
    /** 合同id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleBillLogVO[]>('/web/wss/sales-contract/listLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 销售订单选择销售合同 POST /web/wss/sales-contract/listSalesContract */
export async function listSalesContractUsingPOST(
  body: WSS.SalesContractVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSalesContractVO_>('/web/wss/sales-contract/listSalesContract', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售订单选择销售合同商品 POST /web/wss/sales-contract/listSalesContractWare */
export async function listSalesContractWareUsingPOST(
  body: WSS.SalesContractDetailVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSalesContractOrderWareVO_>(
    '/web/wss/sales-contract/listSalesContractWare',
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

/** 获取批发商品列表 POST /web/wss/sales-contract/listWare */
export async function listWareUsingPOST(
  body: WSS.WarePriceVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationWarePriceDetailVO_>('/web/wss/sales-contract/listWare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提审 POST /web/wss/sales-contract/submitReview */
export async function submitReviewUsingPOST(
  params: {
    // query
    /** 合同id */
    id?: string;
    /** 提审备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sales-contract/submitReview', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
