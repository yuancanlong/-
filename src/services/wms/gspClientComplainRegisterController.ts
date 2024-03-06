// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增GSP顾客投诉登记 POST /web/wms/gspClientComplainRegister/create */
export async function createUsingPOST(
  body: WMS.ClientComplainRegisterVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspClientComplainRegister/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /web/wms/gspClientComplainRegister/delete */
export async function deleteUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspClientComplainRegister/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出excel POST /web/wms/gspClientComplainRegister/export */
export async function exportUsingPOST(
  body: WMS.ClientComplainRegisterPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspClientComplainRegister/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取GSP顾客投诉登记详情 GET /web/wms/gspClientComplainRegister/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.ClientComplainRegisterVO>(`/web/wms/gspClientComplainRegister/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取操作日志 GET /web/wms/gspClientComplainRegister/listTraceLog/${param0} */
export async function listTraceLogUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.TraceLogVO[]>(`/web/wms/gspClientComplainRegister/listTraceLog/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询GSP顾客投诉登记列表 POST /web/wms/gspClientComplainRegister/query */
export async function queryUsingPOST(
  body: WMS.ClientComplainRegisterPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationClientComplainRegisterVO_>(
    '/web/wms/gspClientComplainRegister/query',
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

/** 修改GSP顾客投诉登记 POST /web/wms/gspClientComplainRegister/update */
export async function updateUsingPOST(
  body: WMS.ClientComplainRegisterVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspClientComplainRegister/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
