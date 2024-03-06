// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增在库药品抽（送）检单 POST /web/wms/gspDrugChecklist/add */
export async function addUsingPOST(body: WMS.GspDrugChecklistVO, options?: { [key: string]: any }) {
  return request<string>('/web/wms/gspDrugChecklist/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审核 POST /web/wms/gspDrugChecklist/cancel/${param0} */
export async function cancelUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/gspDrugChecklist/cancel/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 审核 POST /web/wms/gspDrugChecklist/check/${param0} */
export async function checkUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/gspDrugChecklist/check/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 抽（送）检单明细 GET /web/wms/gspDrugChecklist/detail/${param0} */
export async function detailUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.GspDrugChecklistVO>(`/web/wms/gspDrugChecklist/detail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询在库药品抽（送）检单 POST /web/wms/gspDrugChecklist/query */
export async function queryUsingPOST(
  body: WMS.GspDrugChecklistPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspDrugChecklistVO_>('/web/wms/gspDrugChecklist/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新在库药品抽（送）检单 POST /web/wms/gspDrugChecklist/update */
export async function updateUsingPOST(
  body: WMS.GspDrugChecklistVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspDrugChecklist/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
