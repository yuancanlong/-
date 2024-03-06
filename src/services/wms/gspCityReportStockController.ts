// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** GSP药品(库存)列表 POST /web/wms/gspCityReportStock/drugQuery */
export async function drugQueryUsingPOST(
  body: WMS.CityReportStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationDrugCityReportStockVO_>('/web/wms/gspCityReportStock/drugQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出excel-GSP医疗器械(库存)列表 POST /web/wms/gspCityReportStock/export */
export async function exportUsingPOST(
  body: WMS.CityReportStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspCityReportStock/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出excel-GSP药品(库存)列表 POST /web/wms/gspCityReportStock/exportDrug */
export async function exportDrugUsingPOST(
  body: WMS.CityReportStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspCityReportStock/exportDrug', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** GSP医疗器械(库存)列表 POST /web/wms/gspCityReportStock/query */
export async function queryUsingPOST(
  body: WMS.CityReportStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationCityReportStockVO_>('/web/wms/gspCityReportStock/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
