// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询项目敞口流水 POST /web/po/projectCreditLog/query */
export async function queryUsingPOST(
  body: PO.ProjectCreditLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectCreditLogVO_>('/web/po/projectCreditLog/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
