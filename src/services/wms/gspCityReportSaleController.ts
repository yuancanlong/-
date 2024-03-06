// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询(药品)- 销售列表 POST /web/wms/gspCityReportSale/drugQuery */
export async function drugQueryUsingPOST(
  body: WMS.CityReportSalePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationCityReportSaleVO_>('/web/wms/gspCityReportSale/drugQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出excel-GSP药品(销售信息)列表 POST /web/wms/gspCityReportSale/exportDrug */
export async function exportDrugUsingPOST(
  body: WMS.CityReportSalePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspCityReportSale/exportDrug', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 零售侧(医疗器械)- 销售列表 POST /web/wms/gspCityReportSale/instrumentQuery */
export async function instrumentQueryUsingPOST(
  body: WMS.CityReportSalePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationCityReportInstrumentSaleVO_>(
    '/web/wms/gspCityReportSale/instrumentQuery',
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

/** 零售侧-GSP医疗器械(销售信息)-导出excel POST /web/wms/gspCityReportSale/instrumentSaleExport */
export async function instrumentSaleExportUsingPOST(
  body: WMS.CityReportSalePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspCityReportSale/instrumentSaleExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
