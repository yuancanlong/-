// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出excel POST /web/wms/gspCityReportFirstStock/export */
export async function exportUsingPOST(
  body: WMS.CityReportFirstStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspCityReportFirstStock/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** GSP医疗器械(首次库存)列表 POST /web/wms/gspCityReportFirstStock/query */
export async function queryUsingPOST(
  body: WMS.CityReportFirstStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationCityReportFirstStockVO_>('/web/wms/gspCityReportFirstStock/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
