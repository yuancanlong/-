// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加或更新配置 POST /web/pop/third-config/addOrUpdate */
export async function addOrUpdateUsingPOST(
  body: POP.ThirdConfigUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/third-config/addOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除配置 GET /web/pop/third-config/delete */
export async function deleteUsingGET(
  params: {
    // query
    /** 配置编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/third-config/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取配置 GET /web/pop/third-config/get */
export async function getUsingGET(
  params: {
    // query
    /** 配置编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.ThirdConfigVO>('/web/pop/third-config/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页：获取第三方配置列表 POST /web/pop/third-config/list */
export async function listUsingPOST(
  body: POP.ThirdConfigPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<POP.PaginationThirdConfigVO_>('/web/pop/third-config/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取配置平台字典 POST /web/pop/third-config/listThirdConfigPlatform */
export async function listThirdConfigPlatformUsingPOST(options?: { [key: string]: any }) {
  return request<POP.DictItemVO[]>('/web/pop/third-config/listThirdConfigPlatform', {
    method: 'POST',
    ...(options || {}),
  });
}
