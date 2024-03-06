// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取全部系统短信模板 POST /web/pop/msgsendlist/allSysMsgTemplate */
export async function allSysMsgTemplateUsingPOST(options?: { [key: string]: any }) {
  return request<POP.SysMsgTemplateVO[]>('/web/pop/msgsendlist/allSysMsgTemplate', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取商户发送短信信息 GET /web/pop/msgsendlist/get */
export async function getUsingGET(
  params: {
    // query
    /** 短信编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.MsgSendlistVO>('/web/pop/msgsendlist/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取商户发送短信列表 POST /web/pop/msgsendlist/list */
export async function listUsingPOST(
  body: POP.MsgSendlistPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<POP.PaginationMsgSendlistVO_>('/web/pop/msgsendlist/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
