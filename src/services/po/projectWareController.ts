// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 项目商品信息分页查询 POST /web/po/projectInfo/ware/query */
export async function queryUsingPOST(
  body: PO.ProjectWarePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectWareVO_>('/web/po/projectInfo/ware/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
