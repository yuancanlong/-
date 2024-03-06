// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /web/po/consignment */
export async function saveUsingPOST(
  body: PO.ConsignmentCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/consignment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消品供 POST /web/po/consignment/cancel */
export async function cancelSupplyUsingPOST(body: number[], options?: { [key: string]: any }) {
  return request<boolean>('/web/po/consignment/cancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 代销品商品导入模板 POST /web/po/consignment/download/template */
export async function templateUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/po/consignment/download/template', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 导出 POST /web/po/consignment/export */
export async function exportUsingPOST(
  body: PO.ConsignmentPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/consignment/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 代销品商品导入 POST /web/po/consignment/import */
export async function importConsignmentUsingPOST(
  params: {
    // query
    /** file */
    file: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.ConsignmentImportResultVO>('/web/po/consignment/import', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询 POST /web/po/consignment/query */
export async function queryUsingPOST(
  body: PO.ConsignmentPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationConsignmentVO_>('/web/po/consignment/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取 GET /web/po/consignment/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.ConsignmentInfoVO>(`/web/po/consignment/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
