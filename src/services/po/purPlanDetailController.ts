// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 采购计划明细分页查询 POST /web/po/pur/plan/detail/query */
export async function queryUsingPOST(
  body: PO.PurPlanDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPurPlanDetailVO_>('/web/po/pur/plan/detail/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
