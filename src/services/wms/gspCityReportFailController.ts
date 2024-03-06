// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出excel POST /web/wms/gspCityReportFail/export */
export async function exportUsingPOST(
  body: WMS.CityReportFailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspCityReportFail/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** GSP医疗器械(不合格报损)列表 POST /web/wms/gspCityReportFail/query */
export async function queryUsingPOST(
  body: WMS.CityReportFailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationCityReportFailVO_>('/web/wms/gspCityReportFail/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
