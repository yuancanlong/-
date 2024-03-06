// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出退回收货记录 POST /web/wms/gspSaleStockInRecord/saleReceive/export */
export async function saleReceiveExportUsingPOST(
  body: WMS.GspSaleRecheckItemRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSaleStockInRecord/saleReceive/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退回收货记录 POST /web/wms/gspSaleStockInRecord/saleReceive/query */
export async function saleReceiveQueryUsingPOST(
  body: WMS.GspSaleRecheckItemRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspSaleRecheckItemRecordVO_>(
    '/web/wms/gspSaleStockInRecord/saleReceive/query',
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

/** 导出销售退货记录 POST /web/wms/gspSaleStockInRecord/saleReturn/export */
export async function saleReturnExportUsingPOST(
  body: WMS.SaleStockInDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSaleStockInRecord/saleReturn/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售退货记录 POST /web/wms/gspSaleStockInRecord/saleReturn/query */
export async function saleReturnQueryUsingPOST(
  body: WMS.SaleStockInDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationSaleStockInDetailItemVO_>(
    '/web/wms/gspSaleStockInRecord/saleReturn/query',
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

/** 导出退回入库记录 POST /web/wms/gspSaleStockInRecord/saleStockIn/export */
export async function saleStockInExportUsingPOST(
  body: WMS.GspSaleStockInRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSaleStockInRecord/saleStockIn/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退回入库记录 POST /web/wms/gspSaleStockInRecord/saleStockIn/query */
export async function saleStockInQueryUsingPOST(
  body: WMS.GspSaleStockInRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspSaleStockInRecordVO_>(
    '/web/wms/gspSaleStockInRecord/saleStockIn/query',
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
