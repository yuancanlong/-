// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** GSP药品(验收信息)列表 POST /web/wms/gspCityReportRecheck/drugQuery */
export async function drugQueryUsingPOST(
  body: WMS.CityReportRecheckPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationDrugCityReportRecheckVO_>(
    '/web/wms/gspCityReportRecheck/drugQuery',
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

/** 导出excel-GSP医疗器械(验收)列表 POST /web/wms/gspCityReportRecheck/export */
export async function exportUsingPOST(
  body: WMS.CityReportRecheckPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspCityReportRecheck/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出excel-GSP药品(验收)列表 POST /web/wms/gspCityReportRecheck/exportDrug */
export async function exportDrugUsingPOST(
  body: WMS.CityReportRecheckPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspCityReportRecheck/exportDrug', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** GSP医疗器械(验收信息)列表 POST /web/wms/gspCityReportRecheck/query */
export async function queryUsingPOST(
  body: WMS.CityReportRecheckPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationCityReportRecheckVO_>('/web/wms/gspCityReportRecheck/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
