// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 关闭计划 POST /web/wss/future-purchase/close */
export async function closeUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id?: string;
    /** 备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/future-purchase/close', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 确认计划 POST /web/wss/future-purchase/confirm */
export async function confirmUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id?: string;
    /** 是否最后一次确认计划（0：否；1：是） */
    isLast?: number;
    /** 备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/future-purchase/confirm', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑预约采购计划 POST /web/wss/future-purchase/edit */
export async function editUsingPOST(
  body: WSS.FuturePurchaseUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/future-purchase/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出:  导出所选（只传勾选的订单id），导出当前条件（传搜索的字段） POST /web/wss/future-purchase/export */
export async function exportUsingPOST(
  body: WSS.FuturePurchaseVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/future-purchase/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据单据编号获取预约采购计划 GET /web/wss/future-purchase/get */
export async function getUsingGET(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.FuturePurchaseExpandVO>('/web/wss/future-purchase/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取预约采购计划列表 POST /web/wss/future-purchase/list */
export async function listUsingPOST(
  body: WSS.FuturePurchaseVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationFuturePurchaseVO_>('/web/wss/future-purchase/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取操作日志列表 GET /web/wss/future-purchase/listLog */
export async function listLogUsingGET(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleBillLogVO[]>('/web/wss/future-purchase/listLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取效期预警商品 POST /web/wss/future-purchase/listWarningWare */
export async function listWarningWareUsingPOST(options?: { [key: string]: any }) {
  return request<WSS.FutureStockWarning[]>('/web/wss/future-purchase/listWarningWare', {
    method: 'POST',
    ...(options || {}),
  });
}
