// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除 GET /web/base/category/delete */
export async function deleteUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/category/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除商品类目绑定 GET /web/base/category/deleteWareCategory */
export async function deleteWareCategoryUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/category/deleteWareCategory', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取单条信息 GET /web/base/category/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.CategoryVO>('/web/base/category/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加 POST /web/base/category/insert */
export async function insertUsingPOST(body: BASE.CategoryVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/category/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加商品类目绑定 GET /web/base/category/insertWareCategory */
export async function insertWareCategoryUsingGET(
  params: {
    // query
    /** categoryId */
    categoryId: string;
    /** skuId */
    skuId: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/category/insertWareCategory', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取类目树 GET /web/base/category/listTree */
export async function listTreeUsingGET(
  params: {
    // query
    /** 类名(可空) */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.CategoryItemVO[]>('/web/base/category/listTree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新 POST /web/base/category/update */
export async function updateUsingPOST(body: BASE.CategoryVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/category/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
