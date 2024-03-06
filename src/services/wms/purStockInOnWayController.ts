// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 在途明细 POST /web/wms/purStockIn/on-way/detail */
export async function detailUsingPOST(
  body: WMS.PurStockInOnWayPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationPurStockInOnWayExportVO_>('/web/wms/purStockIn/on-way/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出明细 POST /web/wms/purStockIn/on-way/export */
export async function wareExportUsingPOST(
  body: WMS.PurStockInOnWayPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/purStockIn/on-way/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 在途列表 POST /web/wms/purStockIn/on-way/list */
export async function listUsingPOST(
  body: WMS.PurStockInOnWayPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationPurStockInOnWayVO_>('/web/wms/purStockIn/on-way/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 统计汇总报表 POST /web/wms/purStockIn/on-way/statistics-report */
export async function statisticsReportUsingPOST(
  body: WMS.PurStockInOnWayPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PurStockInOnWayStatisticsVO>('/web/wms/purStockIn/on-way/statistics-report', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
