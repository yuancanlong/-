// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 关闭退货单 POST /web/wss/future-return/close */
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
  return request<boolean>('/web/wss/future-return/close', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 确认退货单 POST /web/wss/future-return/confirm */
export async function confirmUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id?: string;
    /** 是否最后一次确认退货单（0：否；1：是） */
    isLast?: number;
    /** 备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/future-return/confirm', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑预约退货单 POST /web/wss/future-return/edit */
export async function editUsingPOST(
  body: WSS.FutureReturnUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/future-return/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据单据编号获取预约退货单 GET /web/wss/future-return/get */
export async function getUsingGET(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.FutureReturnExpandVO>('/web/wss/future-return/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取预约退货单列表 POST /web/wss/future-return/list */
export async function listUsingPOST(
  body: WSS.FutureReturnVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationFutureReturnVO_>('/web/wss/future-return/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取操作日志列表 GET /web/wss/future-return/listLog */
export async function listLogUsingGET(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleBillLogVO[]>('/web/wss/future-return/listLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
