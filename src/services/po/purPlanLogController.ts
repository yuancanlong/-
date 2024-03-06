// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 采购计划日志分页查询 POST /web/po/pur/plan/log/query */
export async function queryUsingPOST(
  body: PO.PurPlanLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPurPlanLogVO_>('/web/po/pur/plan/log/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
