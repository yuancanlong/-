// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增GSP职员资料维护 POST /web/wms/gspStaff/create */
export async function createUsingPOST(body: WMS.GspStaffVO, options?: { [key: string]: any }) {
  return request<string>('/web/wms/gspStaff/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出GSP职员资料维护 POST /web/wms/gspStaff/export */
export async function exportUsingPOST(
  body: WMS.GspStaffPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspStaff/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取GSP职员资料维护 GET /web/wms/gspStaff/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.GspStaffVO>(`/web/wms/gspStaff/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询GSP职员资料维护 POST /web/wms/gspStaff/query */
export async function queryUsingPOST(
  body: WMS.GspStaffPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspStaffVO_>('/web/wms/gspStaff/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改GSP职员资料维护 POST /web/wms/gspStaff/update */
export async function updateUsingPOST(body: WMS.GspStaffVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspStaff/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
