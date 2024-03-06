// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加特殊药品限购 POST /web/wms/gspSpecialDrugSaleLimit/add */
export async function addUsingPOST(
  body: WMS.GspSpecialDrugSaleLimitUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSpecialDrugSaleLimit/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消 POST /web/wms/gspSpecialDrugSaleLimit/cancel/${param0} */
export async function cancelUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/gspSpecialDrugSaleLimit/cancel/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 审核 POST /web/wms/gspSpecialDrugSaleLimit/check/${param0} */
export async function checkUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/gspSpecialDrugSaleLimit/check/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 关闭 POST /web/wms/gspSpecialDrugSaleLimit/close/${param0} */
export async function closeUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/gspSpecialDrugSaleLimit/close/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 特殊药品限购详情 GET /web/wms/gspSpecialDrugSaleLimit/getDetail */
export async function getDetailUsingGET(
  params: {
    // query
    /** id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.GspSpecialDrugSaleLimitDetailVO>(
    '/web/wms/gspSpecialDrugSaleLimit/getDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取操作日志 GET /web/wms/gspSpecialDrugSaleLimit/listTraceLog/${param0} */
export async function listTraceLogUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.TraceLogVO[]>(`/web/wms/gspSpecialDrugSaleLimit/listTraceLog/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 特殊药品限购列表 POST /web/wms/gspSpecialDrugSaleLimit/query */
export async function queryUsingPOST(
  body: WMS.GspSpecialDrugSaleLimitPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspSpecialDrugSaleLimitVO_>(
    '/web/wms/gspSpecialDrugSaleLimit/query',
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

/** 更新特殊药品限购 POST /web/wms/gspSpecialDrugSaleLimit/update */
export async function updateUsingPOST(
  body: WMS.GspSpecialDrugSaleLimitUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSpecialDrugSaleLimit/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
