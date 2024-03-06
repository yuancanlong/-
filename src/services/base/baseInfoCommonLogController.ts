// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询 POST /web/base/baseInfoCommonLog/list */
export async function listUsingPOST(
  body: BASE.BaseInfoCommonLogVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationBaseInfoCommonLogVO_>('/web/base/baseInfoCommonLog/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
