// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加或更新短信模板 POST /web/pop/msgtemplate/addOrUpdate */
export async function addOrUpdateUsingPOST(
  body: POP.MsgTemplateUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/msgtemplate/addOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量启用/停用短信模板 POST /web/pop/msgtemplate/enable */
export async function enableUsingPOST(body: POP.EnableVOString_, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/msgtemplate/enable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取商户短信模板信息 GET /web/pop/msgtemplate/get */
export async function getUsingGET(
  params: {
    // query
    /** 模板编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.MsgTemplateVO>('/web/pop/msgtemplate/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取系统短信模板内容 GET /web/pop/msgtemplate/getSysMsgTemplateContent */
export async function getSysMsgTemplateContentUsingGET(
  params: {
    // query
    /** 系统模板编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.SysMsgTemplateContentVO>('/web/pop/msgtemplate/getSysMsgTemplateContent', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取商户短信模板列表 POST /web/pop/msgtemplate/list */
export async function listUsingPOST(
  body: POP.MsgTemplatePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<POP.PaginationMsgTemplateVO_>('/web/pop/msgtemplate/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取系统平台短信模板列表 GET /web/pop/msgtemplate/listSysMsgTemplate */
export async function listSysMsgTemplateUsingGET(options?: { [key: string]: any }) {
  return request<POP.SysMsgTemplateVO[]>('/web/pop/msgtemplate/listSysMsgTemplate', {
    method: 'GET',
    ...(options || {}),
  });
}
