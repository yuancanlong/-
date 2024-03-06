// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑短信平台信息 POST /web/pop/msgplatform/addOrUpdate */
export async function addOrUpdateUsingPOST(
  body: POP.MsgPlatformUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/msgplatform/addOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取全部商户短信渠道 POST /web/pop/msgplatform/all */
export async function allUsingPOST(options?: { [key: string]: any }) {
  return request<POP.MsgPlatformVO[]>('/web/pop/msgplatform/all', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 批量启用/停用商户短信渠道 POST /web/pop/msgplatform/enable */
export async function enableUsingPOST(body: POP.EnableVOString_, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/msgplatform/enable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取短信平台信息 GET /web/pop/msgplatform/get */
export async function getUsingGET(
  params: {
    // query
    /** 短信平台编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.MsgPlatformVO>('/web/pop/msgplatform/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取短信平台信息列表 POST /web/pop/msgplatform/list */
export async function listUsingPOST(
  body: POP.MsgPlatformPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<POP.PaginationMsgPlatformVO_>('/web/pop/msgplatform/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取系统短信平台列表 GET /web/pop/msgplatform/listSysMsgPlatform */
export async function listSysMsgPlatformUsingGET(options?: { [key: string]: any }) {
  return request<POP.SysMsgPlatformVO[]>('/web/pop/msgplatform/listSysMsgPlatform', {
    method: 'GET',
    ...(options || {}),
  });
}
