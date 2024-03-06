// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取用户授权菜单 GET /web/pop/right/listAuthModule */
export async function listAuthModuleUsingGET(options?: { [key: string]: any }) {
  return request<POP.RightModuleVO[]>('/web/pop/right/listAuthModule', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户授权页面按钮 GET /web/pop/right/listAuthModuleElement */
export async function listAuthModuleElementUsingGET(
  params: {
    // query
    /** moduleFlag */
    moduleFlag?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.RightModuleVO[]>('/web/pop/right/listAuthModuleElement', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
