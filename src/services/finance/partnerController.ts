// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询合作伙伴 POST /web/finance/partner/query */
export async function queryUsingPOST(
  body: FINANCE.PartnerPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationPartnerVO_>('/web/finance/partner/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
