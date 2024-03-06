// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/base/wareTaxChangeLog/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 商品编号 */
    skuId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/wareTaxChangeLog/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核 POST /web/base/wareTaxChangeLog/check */
export async function checkUsingPOST(
  body: BASE.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/wareTaxChangeLog/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增租户商品税率变更日志 POST /web/base/wareTaxChangeLog/create */
export async function createUsingPOST(
  body: BASE.WareTaxChangeLogVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/wareTaxChangeLog/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取租户商品税率变更日志 GET /web/base/wareTaxChangeLog/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** 主键 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<BASE.WareTaxChangeLogVO>(`/web/base/wareTaxChangeLog/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 商品信息变更自动带出原商品税收分类编码 POST /web/base/wareTaxChangeLog/getBeforeWare */
export async function getBeforeWareUsingPOST(
  params: {
    // query
    /** skuId */
    skuId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.BeforeWareVO>('/web/base/wareTaxChangeLog/getBeforeWare', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询租户商品税率变更日志 POST /web/base/wareTaxChangeLog/query */
export async function queryUsingPOST(
  body: BASE.WareTaxChangeLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareTaxChangeLogVO_>('/web/base/wareTaxChangeLog/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/base/wareTaxChangeLog/revoke */
export async function revokeUsingPOST(
  body: BASE.BillRevokeHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/wareTaxChangeLog/revoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 单据提审 POST /web/base/wareTaxChangeLog/submitReview */
export async function submitReviewUsingPOST(
  body: BASE.BilSubmitReviewHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/wareTaxChangeLog/submitReview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改租户商品税率变更日志 POST /web/base/wareTaxChangeLog/update */
export async function updateUsingPOST(
  body: BASE.WareTaxChangeLogVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/wareTaxChangeLog/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
