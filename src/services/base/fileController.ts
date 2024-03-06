// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 上传文件 POST /web/base/file/upload */
export async function uploadUsingPOST(
  params: {
    // query
    /** 文件存储路径 */
    path?: string;
    /** 返回的文件路径是否添加原文件名参数 */
    withFileName?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/file/upload', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 下载文件 GET /web/base/file/view/&#42;&#42; */
export async function viewUsingGET(
  params: {
    // query
    /** 文件名称 */
    fileName?: string;
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/web/base/file/view/**', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
