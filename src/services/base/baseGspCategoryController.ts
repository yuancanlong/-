// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取类目树 GET /web/base/base-gsp-category/listTree */
export async function listTreeUsingGET(
  params: {
    // query
    /** 类名(可空) */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.BaseGspCategoryItemVO[]>('/web/base/base-gsp-category/listTree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
