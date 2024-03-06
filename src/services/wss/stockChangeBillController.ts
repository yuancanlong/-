// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/wss/stock-change-bill/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/stock-change-bill/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核 POST /web/wss/stock-change-bill/check */
export async function checkUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/stock-change-bill/check', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增仓库变更单 POST /web/wss/stock-change-bill/create */
export async function createUsingPOST(
  body: WSS.StockChangeBillUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/stock-change-bill/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑仓库变更单 POST /web/wss/stock-change-bill/edit */
export async function editUsingPOST(
  body: WSS.StockChangeBillUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/stock-change-bill/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据单据编码获取变更单详情 GET /web/wss/stock-change-bill/get */
export async function getUsingGET(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.StockChangeBillExpandVO>('/web/wss/stock-change-bill/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取库存变更单明细的最大条目数量（根据预约仓编码） GET /web/wss/stock-change-bill/getMaxItemNumber */
export async function getMaxItemNumberUsingGET(
  params: {
    // query
    /** 预约仓编码 */
    entrustCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<number>('/web/wss/stock-change-bill/getMaxItemNumber', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取库存变更单列表 POST /web/wss/stock-change-bill/list */
export async function listUsingPOST(
  body: WSS.StockChangeBillVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationStockChangeBillVO_>('/web/wss/stock-change-bill/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取预约仓 GET /web/wss/stock-change-bill/listEntrustStore */
export async function listEntrustStoreUsingGET(options?: { [key: string]: any }) {
  return request<WSS.EntrustStoreVO[]>('/web/wss/stock-change-bill/listEntrustStore', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取库存变更单日志列表 GET /web/wss/stock-change-bill/listLog */
export async function listLogUsingGET(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleBillLogVO[]>('/web/wss/stock-change-bill/listLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取虚拟仓库存列表 POST /web/wss/stock-change-bill/listStockWare */
export async function listStockWareUsingPOST(
  body: WSS.StockWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationStockWareVO_>('/web/wss/stock-change-bill/listStockWare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据预约仓编码获取物理仓下拉列表-弃用，直接取预约仓里面的物理仓集合 GET /web/wss/stock-change-bill/listWareHouseByEntrustCode */
export async function listWareHouseByEntrustCodeUsingGET(
  params: {
    // query
    /** 预约仓编码 */
    entrustCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.WareHouseVO[]>('/web/wss/stock-change-bill/listWareHouseByEntrustCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
