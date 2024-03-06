// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取最新配置 GET /web/wms/restockConfig */
export async function getUsingGET(options?: { [key: string]: any }) {
  return request<WMS.RestockConfigVO>('/web/wms/restockConfig', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 新增配置 POST /web/wms/restockConfig/save */
export async function saveUsingPOST(body: WMS.RestockConfigVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/restockConfig/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
