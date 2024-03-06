// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增GSP质量信息收集、传递、反馈登记详情 POST /web/wms/gspGatherPassFeedback/create */
export async function createUsingPOST(
  body: WMS.GatherPassFeedbackVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspGatherPassFeedback/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /web/wms/gspGatherPassFeedback/delete */
export async function deleteUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspGatherPassFeedback/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出excel POST /web/wms/gspGatherPassFeedback/export */
export async function exportUsingPOST(
  body: WMS.GatherPassFeedbackPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspGatherPassFeedback/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取GSP质量信息收集、传递、反馈登记详情 GET /web/wms/gspGatherPassFeedback/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.GatherPassFeedbackVO>(`/web/wms/gspGatherPassFeedback/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取操作日志 GET /web/wms/gspGatherPassFeedback/listTraceLog/${param0} */
export async function listTraceLogUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.TraceLogVO[]>(`/web/wms/gspGatherPassFeedback/listTraceLog/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询GSP质量信息收集、传递、反馈登记详情 POST /web/wms/gspGatherPassFeedback/query */
export async function queryUsingPOST(
  body: WMS.GatherPassFeedbackPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGatherPassFeedbackVO_>('/web/wms/gspGatherPassFeedback/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改GSP质量信息收集、传递、反馈登记详情 POST /web/wms/gspGatherPassFeedback/update */
export async function updateUsingPOST(
  body: WMS.GatherPassFeedbackVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspGatherPassFeedback/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
