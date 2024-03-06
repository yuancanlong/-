// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出采退出库记录 POST /web/wms/gspSaleStockOutRecord/purStockOut/export */
export async function purStockOutExportUsingPOST(
  body: WMS.GspStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSaleStockOutRecord/purStockOut/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采退出库记录 POST /web/wms/gspSaleStockOutRecord/purStockOut/query */
export async function purStockOutQueryUsingPOST(
  body: WMS.GspStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspPurStockOutRecordVO_>(
    '/web/wms/gspSaleStockOutRecord/purStockOut/query',
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

/** 导出销售记录 POST /web/wms/gspSaleStockOutRecord/saleOut/export */
export async function saleOutExportUsingPOST(
  body: WMS.SaleOutDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSaleStockOutRecord/saleOut/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售记录 POST /web/wms/gspSaleStockOutRecord/saleOut/query */
export async function saleOutQueryUsingPOST(
  body: WMS.SaleOutDetailItemPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationSaleOutDetailItemVO_>(
    '/web/wms/gspSaleStockOutRecord/saleOut/query',
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

/** 导出销售出库复核记录 POST /web/wms/gspSaleStockOutRecord/saleRecheck/export */
export async function saleRecheckExportUsingPOST(
  body: WMS.GspSaleOutRecheckRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSaleStockOutRecord/saleRecheck/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售出库复核记录 POST /web/wms/gspSaleStockOutRecord/saleRecheck/query */
export async function saleRecheckQueryUsingPOST(
  body: WMS.GspSaleOutRecheckRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspSaleOutRecheckRecordVO_>(
    '/web/wms/gspSaleStockOutRecord/saleRecheck/query',
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

/** 导出销售出库记录 POST /web/wms/gspSaleStockOutRecord/saleStockOut/export */
export async function saleStockOutExportUsingPOST(
  body: WMS.GspStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspSaleStockOutRecord/saleStockOut/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售出库记录 POST /web/wms/gspSaleStockOutRecord/saleStockOut/query */
export async function saleStockOutQueryUsingPOST(
  body: WMS.GspStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspSaleStockOutRecordVO_>(
    '/web/wms/gspSaleStockOutRecord/saleStockOut/query',
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
