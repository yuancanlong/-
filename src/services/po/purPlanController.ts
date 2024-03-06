// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑数据 PUT /web/po/pur/plan */
export async function editUsingPUT(body: PO.PurPlanUpdateVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/pur/plan', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存数据 POST /web/po/pur/plan */
export async function saveUsingPOST(body: PO.PurPlanCreateVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/pur/plan', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消 GET /web/po/pur/plan/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/pur/plan/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 转采购订单 GET /web/po/pur/plan/change-order */
export async function changeOrderUsingGET(
  body: PO.PurPlanChangeOrderCreateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/pur/plan/change-order', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审核 GET /web/po/pur/plan/check/${param0} */
export async function checkUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/pur/plan/check/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 采购计划模板下载 POST /web/po/pur/plan/download/template */
export async function templateUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/po/pur/plan/download/template', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 采购计划商品导入 POST /web/po/pur/plan/import */
export async function importSkuUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.PurPlanImportVO>('/web/po/pur/plan/import', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 采购计划分页查询 POST /web/po/pur/plan/query */
export async function queryUsingPOST(
  body: PO.PurPlanPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPurPlanVO_>('/web/po/pur/plan/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购计划详情查询(未生成采购订单-采购计划明细,已生成采购订单-采购计划日志) GET /web/po/pur/plan/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.PurPlanInfoVO>(`/web/po/pur/plan/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
