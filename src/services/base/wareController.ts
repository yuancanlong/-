// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 商品导出:  导出所选（只传勾选的skuId），导出当前条件（传搜索的字段） POST /web/base/ware/export */
export async function exportUsingPOST(
  body: BASE.WareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/ware/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出广州市药监数据(药品) POST /web/base/ware/exportMedicaProducts */
export async function exportMedicaProductsUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/base/ware/exportMedicaProducts', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 导出广州市药监数据(医疗器械) POST /web/base/ware/exportProducts */
export async function exportProductsUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/base/ware/exportProducts', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 导出广东省药监数据（药品） POST /web/base/ware/exportSimpleProducts */
export async function exportSimpleProductsUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/base/ware/exportSimpleProducts', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 根据ID或者skuId获取单条信息 GET /web/base/ware/get */
export async function getUsingGET(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.WareVO>('/web/base/ware/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取商品编码 GET /web/base/ware/getSkuId */
export async function getSkuIdUsingGET(options?: { [key: string]: any }) {
  return request<string>('/web/base/ware/getSkuId', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 添加剂型 POST /web/base/ware/insert-dosage-form */
export async function insertDosageFormUsingPOST(
  params: {
    // query
    /** 剂型名称 */
    unitName?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/ware/insert-dosage-form', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加单位 POST /web/base/ware/insert-unit */
export async function insertUnitUsingPOST(
  params: {
    // query
    /** 单位名称 */
    unitName?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/ware/insert-unit', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取分页列表 POST /web/base/ware/list */
export async function listUsingPOST(body: BASE.WareVOPageQuery, options?: { [key: string]: any }) {
  return request<BASE.PaginationWareBriefVO_>('/web/base/ware/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 品牌列表 GET /web/base/ware/list-brand */
export async function listBrandUsingGET(options?: { [key: string]: any }) {
  return request<BASE.SelectVO[]>('/web/base/ware/list-brand', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 颜色列表 GET /web/base/ware/list-color */
export async function listColorUsingGET(options?: { [key: string]: any }) {
  return request<BASE.SelectVO[]>('/web/base/ware/list-color', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 科室列表 GET /web/base/ware/list-department */
export async function listDepartmentUsingGET(options?: { [key: string]: any }) {
  return request<BASE.SelectVO[]>('/web/base/ware/list-department', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 剂型列表 GET /web/base/ware/list-dosage-form */
export async function listDosageFormUsingGET(options?: { [key: string]: any }) {
  return request<BASE.SelectVO[]>('/web/base/ware/list-dosage-form', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 药品分类列表 GET /web/base/ware/list-drug-category */
export async function listDrugCategoryUsingGET(options?: { [key: string]: any }) {
  return request<BASE.SelectVO[]>('/web/base/ware/list-drug-category', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取分页列表（无库存） POST /web/base/ware/list-not-stock */
export async function listNotStockUsingPOST(
  body: BASE.WareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareBriefVO_>('/web/base/ware/list-not-stock', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取多色码合并商品分页列表 POST /web/base/ware/list-ofMerge */
export async function listOfMergeUsingPOST(
  body: BASE.WareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareBriefVO_>('/web/base/ware/list-ofMerge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取商品分页列表(采购订单专用) POST /web/base/ware/list-purchase-not-stock */
export async function listPurchaseNotStockUsingPOST(
  body: BASE.WareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareBriefVO_>('/web/base/ware/list-purchase-not-stock', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 尺码列表 GET /web/base/ware/list-spec */
export async function listSpecUsingGET(options?: { [key: string]: any }) {
  return request<BASE.SelectVO[]>('/web/base/ware/list-spec', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 单位列表 GET /web/base/ware/list-unit */
export async function listUnitUsingGET(options?: { [key: string]: any }) {
  return request<BASE.SelectVO[]>('/web/base/ware/list-unit', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更新商品状态(按条件) POST /web/base/ware/updateStatusToQuery */
export async function updateStatusToQueryUsingPOST(
  params: {
    // query
    /** 原因 */
    reason?: string;
    /** 状态，1：启用 2：停用 3：停购 */
    status?: string;
  },
  body: BASE.WareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/ware/updateStatusToQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 校验阿里商品对应关系（停用商品前调用） POST /web/base/ware/validateAliMapping */
export async function validateAliMappingUsingPOST(
  body: BASE.WareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/ware/validateAliMapping', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
