// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增GSP销后召回登记 POST /web/wms/gspSaleRecallRegister/create */
export async function createUsingPOST(
  body: WMS.SaleRecallRegisterVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSaleRecallRegister/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /web/wms/gspSaleRecallRegister/delete */
export async function deleteUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspSaleRecallRegister/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出excel POST /web/wms/gspSaleRecallRegister/export */
export async function exportUsingPOST(
  body: WMS.SaleRecallRegisterPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSaleRecallRegister/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取GSP销后召回登记 GET /web/wms/gspSaleRecallRegister/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.SaleRecallRegisterVO>(`/web/wms/gspSaleRecallRegister/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取操作日志 GET /web/wms/gspSaleRecallRegister/listTraceLog/${param0} */
export async function listTraceLogUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.TraceLogVO[]>(`/web/wms/gspSaleRecallRegister/listTraceLog/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询GSP销后召回登记列表 POST /web/wms/gspSaleRecallRegister/query */
export async function queryUsingPOST(
  body: WMS.SaleRecallRegisterPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationSaleRecallRegisterVO_>('/web/wms/gspSaleRecallRegister/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改GSP销后召回登记 POST /web/wms/gspSaleRecallRegister/update */
export async function updateUsingPOST(
  body: WMS.SaleRecallRegisterVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspSaleRecallRegister/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
