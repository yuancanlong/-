// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑成本调整单 PUT /web/finance/costApp */
export async function editUsingPUT(
  body: FINANCE.CostAppUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/finance/costApp', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增成本调整单 POST /web/finance/costApp */
export async function saveUsingPOST(
  body: FINANCE.CostAppCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/finance/costApp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 成本调整单取消 GET /web/finance/costApp/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/finance/costApp/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 成本调整单审核 POST /web/finance/costApp/check/${param0} */
export async function checkUsingPOST(
  params: {
    // query
    /** pass */
    pass: boolean;
    /** remark */
    remark?: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/finance/costApp/check/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 查询成本调整单 POST /web/finance/costApp/query */
export async function queryUsingPOST(
  body: FINANCE.CostAppPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationCostAppVO_>('/web/finance/costApp/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取成本调整单 GET /web/finance/costApp/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<FINANCE.CostAppInfoVO>(`/web/finance/costApp/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
