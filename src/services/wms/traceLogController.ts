// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 跟踪日志查询 POST /web/wms/TraceLog/query */
export async function queryUsingPOST(
  body: WMS.TraceLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationTraceLogVO_>('/web/wms/TraceLog/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
