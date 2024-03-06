// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建 POST /web/po/salesman/create */
export async function createUsingPOST(body: PO.SalesmanCreateVO, options?: { [key: string]: any }) {
  return request<string>('/web/po/salesman/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /web/po/salesman/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.SalesmanVO>(`/web/po/salesman/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 选择业务员列表 POST /web/po/salesman/list */
export async function listUsingPOST(
  params: {
    // query
    /** 状态过滤 0: 正常 1: 停用(查询所有无需传参) */
    status?: number;
  },
  options?: { [key: string]: any },
) {
  return request<PO.SalesmanListVO[]>('/web/po/salesman/list', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 选择所属上级 POST /web/po/salesman/list-superior */
export async function listBySuperiorUsingPOST(
  params: {
    // query
    /** 当前业务员编码 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.SalesmanListVO[]>('/web/po/salesman/list-superior', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询 POST /web/po/salesman/query */
export async function queryUsingPOST(
  body: PO.SalesmanPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationSalesmanListVO_>('/web/po/salesman/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 启用开关 POST /web/po/salesman/start-switch */
export async function startSwitchUsingPOST(
  body: PO.SalesmanStartSwitchVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/salesman/start-switch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /web/po/salesman/update */
export async function updateUsingPOST(body: PO.SalesmanUpdateVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/salesman/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
