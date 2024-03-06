// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 商品信息导出 GET /web/base/out-ware/export-ware */
export async function exportWareUsingGET(options?: { [key: string]: any }) {
  return request<string>('/web/base/out-ware/export-ware', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 商品对应关系详情 GET /web/base/out-ware/get */
export async function getUsingGET(
  params: {
    // query
    /** 商品对应关系主键 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.OutWareMappingVO>('/web/base/out-ware/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品关系导入 POST /web/base/out-ware/import-out-ware */
export async function importOutWareUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.WareImportResult>('/web/base/out-ware/import-out-ware', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加商品对应关系 POST /web/base/out-ware/insert */
export async function insertUsingPOST(
  body: BASE.OutWareMappingVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/out-ware/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取商品对应关系分页列表 POST /web/base/out-ware/list */
export async function listUsingPOST(
  body: BASE.OutWareMappingVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationOutWareMappingVO_>('/web/base/out-ware/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取内部商品分页列表 POST /web/base/out-ware/list-ware */
export async function listWareUsingPOST(
  body: BASE.OutWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationOutWareVO_>('/web/base/out-ware/list-ware', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改商品对应关系 POST /web/base/out-ware/update */
export async function updateUsingPOST(
  body: BASE.OutWareMappingVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/out-ware/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
