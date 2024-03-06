// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 购进退出记录导出 POST /web/wms/bizStockOutItemResult/poReturnItemExport */
export async function poReturnItemExportUsingPOST(
  body: WMS.BizStockOutSaleResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizStockOutItemResult/poReturnItemExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采退出库记录分页查询 POST /web/wms/bizStockOutItemResult/poReturnItemQuery */
export async function poReturnItemQueryUsingPOST(
  body: WMS.BizStockOutSaleResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockOutItemResultVO_>(
    '/web/wms/bizStockOutItemResult/poReturnItemQuery',
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

/** 销售出库记录导出 POST /web/wms/bizStockOutItemResult/saleItemExport */
export async function saleItemExportUsingPOST(
  body: WMS.BizStockOutSaleResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizStockOutItemResult/saleItemExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售出库记录分页查询 POST /web/wms/bizStockOutItemResult/saleItemQuery */
export async function saleItemQueryUsingPOST(
  body: WMS.BizStockOutSaleResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockOutItemResultVO_>(
    '/web/wms/bizStockOutItemResult/saleItemQuery',
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

/** 订阅商品购进退出记录导出 POST /web/wms/bizStockOutItemResult/subWarePoReturnItemExport */
export async function subWarePoReturnItemExportUsingPOST(
  body: WMS.BizStockOutSaleResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizStockOutItemResult/subWarePoReturnItemExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 订阅商品采退出库记录分页查询 POST /web/wms/bizStockOutItemResult/subWarePoReturnItemQuery */
export async function subWarePoReturnItemQueryUsingPOST(
  body: WMS.BizStockOutSaleResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockOutItemResultVO_>(
    '/web/wms/bizStockOutItemResult/subWarePoReturnItemQuery',
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
