// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增Gsp部门资料维护 POST /web/wms/gspDepartment/create */
export async function createUsingPOST(body: WMS.GspDepartmentVO, options?: { [key: string]: any }) {
  return request<string>('/web/wms/gspDepartment/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 禁用/停用 POST /web/wms/gspDepartment/disable */
export async function disableUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspDepartment/disable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑修改Gsp部门资料维护 POST /web/wms/gspDepartment/editor */
export async function editorUsingPOST(body: WMS.GspDepartmentVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspDepartment/editor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 启用 POST /web/wms/gspDepartment/enable */
export async function enableUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspDepartment/enable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取Gsp部门资料维护 GET /web/wms/gspDepartment/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.GspDepartmentVO>(`/web/wms/gspDepartment/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询全部部门 GET /web/wms/gspDepartment/listAllTree */
export async function listAllTreeUsingGET(
  params: {
    // query
    /** 名称(可空) */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.GspDepartmentVO[]>('/web/wms/gspDepartment/listAllTree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询启用状态部门 GET /web/wms/gspDepartment/listEnableTree */
export async function listEnableTreeUsingGET(
  params: {
    // query
    /** 名称(可空) */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.GspDepartmentVO[]>('/web/wms/gspDepartment/listEnableTree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
