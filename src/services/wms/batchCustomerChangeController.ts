// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 批次库存客户集变更单取消 POST /web/wms/batchCustomerChange/cancel/${param0} */
export async function cancelUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/batchCustomerChange/cancel/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 批次客户集变更单审核 POST /web/wms/batchCustomerChange/check/${param0} */
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
  return request<boolean>(`/web/wms/batchCustomerChange/check/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 新增批次客户集变更单 POST /web/wms/batchCustomerChange/create */
export async function createUsingPOST(
  body: WMS.BatchCustomerChangeVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/batchCustomerChange/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取批次客户集变更单 GET /web/wms/batchCustomerChange/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.BatchCustomerChangeVO>(`/web/wms/batchCustomerChange/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询批次客户集变更单 POST /web/wms/batchCustomerChange/query */
export async function queryUsingPOST(
  body: WMS.BatchCustomerChangePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBatchCustomerChangeVO_>('/web/wms/batchCustomerChange/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 返回修改列表 GET /web/wms/batchCustomerChange/returnUpdate/${param0} */
export async function returnUpdateUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.BatchCustomerChangeVO>(`/web/wms/batchCustomerChange/returnUpdate/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 批次客户集变更单撤销 POST /web/wms/batchCustomerChange/revoke/${param0} */
export async function revokeUsingPOST(
  params: {
    // query
    /** remark */
    remark?: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/batchCustomerChange/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 编辑批次客户集变更单 POST /web/wms/batchCustomerChange/update */
export async function updateUsingPOST(
  body: WMS.BatchCustomerChangeVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/batchCustomerChange/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
