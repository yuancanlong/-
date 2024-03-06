// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/restockStatistics/export */
export async function exportUsingPOST(
  body: WMS.RestockStatisticsPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/restockStatistics/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询补货销量统计表 POST /web/wms/restockStatistics/query */
export async function queryUsingPOST(
  body: WMS.RestockStatisticsPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationRestockStatisticsVO_>('/web/wms/restockStatistics/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
