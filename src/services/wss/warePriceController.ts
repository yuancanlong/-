// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增批发价格 POST /web/wss/ware-price/add */
export async function addUsingPOST(body: WSS.WarePriceUpdateDO, options?: { [key: string]: any }) {
  return request<string>('/web/wss/ware-price/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑批发价格 POST /web/wss/ware-price/edit */
export async function editUsingPOST(body: WSS.WarePriceUpdateDO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wss/ware-price/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 药师帮价格导出 POST /web/wss/ware-price/export */
export async function exportUsingPOST(
  body: WSS.WarePriceVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/ware-price/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取批发价格 GET /web/wss/ware-price/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.WarePriceVO>('/web/wss/ware-price/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 药师帮价格导入 POST /web/wss/ware-price/importDataYSB */
export async function importDataYSBUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.WarePriceImportResultVO>('/web/wss/ware-price/importDataYSB', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品导入 POST /web/wss/ware-price/importWare */
export async function importWarePriceUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.WarePriceImportResultVO>('/web/wss/ware-price/importWare', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取批发价格列表 POST /web/wss/ware-price/list */
export async function listUsingPOST(
  body: WSS.WarePriceVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationWarePriceVO_>('/web/wss/ware-price/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取批发价格操作日志列表 POST /web/wss/ware-price/listLog */
export async function listLogUsingPOST(
  body: WSS.WarePriceLogVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationWarePriceLogVO_>('/web/wss/ware-price/listLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取批发商品列表（批发订单） POST /web/wss/ware-price/listWare */
export async function listWareUsingPOST(
  body: WSS.WarePriceVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationWarePriceDetailVO_>('/web/wss/ware-price/listWare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 启用或停用 POST /web/wss/ware-price/updateStatus */
export async function updateStatusUsingPOST(
  body: WSS.WarePriceStatusVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/ware-price/updateStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
