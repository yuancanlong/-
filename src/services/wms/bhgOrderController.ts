// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 不合格品销毁单审核 POST /web/wms/bhgOrder/check */
export async function checkUsingPOST(body: WMS.BhgOrderCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/bhgOrder/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出 POST /web/wms/bhgOrder/export */
export async function exportUsingPOST(
  body: WMS.BhgOrderPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bhgOrder/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出GSP不合格品销毁单 POST /web/wms/bhgOrder/exportGspBhgOrder */
export async function exportGspBhgOrderUsingPOST(
  body: WMS.GspBhgOrderDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bhgOrder/exportGspBhgOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 不合格品销毁单详情 GET /web/wms/bhgOrder/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.BhgOrderInfoVO>(`/web/wms/bhgOrder/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** GSP不合格品销毁单 POST /web/wms/bhgOrder/listGspBhgOrderDetail */
export async function listGspBhgOrderDetailUsingPOST(
  body: WMS.GspBhgOrderDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBhgOrderDetailItemVO_>('/web/wms/bhgOrder/listGspBhgOrderDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 不合格品销毁单列表查询 POST /web/wms/bhgOrder/query */
export async function queryUsingPOST(
  body: WMS.BhgOrderPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBhgOrderVO_>('/web/wms/bhgOrder/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 出库环节导出 POST /web/wms/bhgOrder/stock/export */
export async function stockExportUsingPOST(
  body: WMS.BhgOrderStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bhgOrder/stock/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 出库环节销毁记录 POST /web/wms/bhgOrder/stock/query */
export async function stockQueryUsingPOST(
  body: WMS.BhgOrderStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBhgOrderStockVO_>('/web/wms/bhgOrder/stock/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
