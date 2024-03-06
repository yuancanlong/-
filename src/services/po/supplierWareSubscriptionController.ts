// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增供应商商品订阅 POST /web/po/supplierWareSubscription/create */
export async function createUsingPOST(
  body: PO.SupplierWareSubscriptionCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/supplierWareSubscription/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 订阅商品模板下载 POST /web/po/supplierWareSubscription/download/template */
export async function templateUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/po/supplierWareSubscription/download/template', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取供应商商品订阅 GET /web/po/supplierWareSubscription/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.SupplierWareSubscriptionVO>(`/web/po/supplierWareSubscription/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 订阅商品导入 POST /web/po/supplierWareSubscription/import */
export async function importSkuUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.SupplierWareSubscriptionImportVO>('/web/po/supplierWareSubscription/import', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询供应商商品订阅 POST /web/po/supplierWareSubscription/query */
export async function queryUsingPOST(
  body: PO.SupplierWareSubscriptionPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationSupplierWareSubscriptionVO_>(
    '/web/po/supplierWareSubscription/query',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 启用/停用 POST /web/po/supplierWareSubscription/start-switch */
export async function startSwitchUsingPOST(
  body: PO.SupplierWareSubscriptionStartSwitchVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/supplierWareSubscription/start-switch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改供应商商品订阅 POST /web/po/supplierWareSubscription/update */
export async function updateUsingPOST(
  body: PO.SupplierWareSubscriptionUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/supplierWareSubscription/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
