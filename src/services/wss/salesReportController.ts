// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出销售报表(商品、客户明细) POST /web/wss/sale-report/exportDetail */
export async function exportDetailUsingPOST(
  body: WSS.SalesReportExportVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-report/exportDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出销售报表(商品、客户汇总) POST /web/wss/sale-report/exportDetailCollect */
export async function exportDetailCollectUsingPOST(
  body: WSS.SalesReportExportVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-report/exportDetailCollect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出客户医疗器械销售信息 POST /web/wss/sale-report/exportMedicalEquipmentSales */
export async function exportMedicalEquipmentSalesUsingPOST(
  body: WSS.WareMedicalEquipmentSalesExportVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-report/exportMedicalEquipmentSales', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取客户批发报表列表 POST /web/wss/sale-report/listCustomerSales */
export async function listCustomerSalesUsingPOST(
  body: WSS.CustomerSalesReportVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationCustomerSalesReportVO_>('/web/wss/sale-report/listCustomerSales', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据客户编码获取商品销售详情 POST /web/wss/sale-report/listCustomerSalesByCus */
export async function listCustomerSalesByCusUsingPOST(
  body: WSS.WareSalesReportVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationCustomerSalesDetailVO_>(
    '/web/wss/sale-report/listCustomerSalesByCus',
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

/** 获取客户医疗器械销售信息 POST /web/wss/sale-report/listMedicalEquipmentSales */
export async function listMedicalEquipmentSalesUsingPOST(
  body: WSS.WareMedicalEquipmentSalesReportVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationWareMedicalEquipmentSalesReportVO_>(
    '/web/wss/sale-report/listMedicalEquipmentSales',
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

/** 获取商品销售报表列表 POST /web/wss/sale-report/listWareSales */
export async function listWareSalesUsingPOST(
  body: WSS.WareSalesReportVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationWareSalesReportVO_>('/web/wss/sale-report/listWareSales', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据商品编码获取商品客户销售详情 POST /web/wss/sale-report/listWareSalesBySku */
export async function listWareSalesBySkuUsingPOST(
  body: WSS.CustomerSalesReportVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationWareSalesDetailVO_>('/web/wss/sale-report/listWareSalesBySku', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据商品编码获取商品出入库销售详情 POST /web/wss/sale-report/listWareStockSalesBySku */
export async function listWareStockSalesBySkuUsingPOST(
  body: WSS.WareSalesReportVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationWareStockSalesReportVO_>(
    '/web/wss/sale-report/listWareStockSalesBySku',
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
