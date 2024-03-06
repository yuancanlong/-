// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/wpfRejectRecord/export */
export async function exportUsingPOST(
  body: WMS.WpfRejectRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/wpfRejectRecord/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取拒收记录 GET /web/wms/wpfRejectRecord/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.WpfRejectRecordInfoVO>(`/web/wms/wpfRejectRecord/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询拒收记录 POST /web/wms/wpfRejectRecord/query */
export async function queryUsingPOST(
  body: WMS.WpfRejectRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfRejectRecordVO_>('/web/wms/wpfRejectRecord/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出 POST /web/wms/wpfRejectRecord/stock/export */
export async function stockExportUsingPOST(
  body: WMS.WpfRejectRecordStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/wpfRejectRecord/stock/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 入库环节拒收记录查询 POST /web/wms/wpfRejectRecord/stock/query */
export async function stockQueryUsingPOST(
  body: WMS.WpfRejectRecordStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfStockRejectRecordVO_>('/web/wms/wpfRejectRecord/stock/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
