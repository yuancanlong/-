// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 采购收货通知单取消 POST /web/wms/purStockIn/notice/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/purStockIn/notice/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 采购收货通知单审核 POST /web/wms/purStockIn/notice/check */
export async function checkUsingPOST(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/purStockIn/notice/check', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取采购收货通知单详情 POST /web/wms/purStockIn/notice/get */
export async function getUsingPOST(
  params: {
    // query
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.PurStockInNoticeVO>('/web/wms/purStockIn/notice/get', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取采购收货通知单列表 POST /web/wms/purStockIn/notice/list */
export async function listUsingPOST(
  body: WMS.PurStockInNoticePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationPurStockInNoticeListVO_>('/web/wms/purStockIn/notice/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出商品 POST /web/wms/purStockIn/notice/ware-export */
export async function wareExportUsingPOST(
  body: WMS.PurStockInNoticePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/purStockIn/notice/ware-export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
