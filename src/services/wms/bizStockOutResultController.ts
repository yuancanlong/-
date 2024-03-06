// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** GSP采退出库列表查询 POST /web/wms/bizStockOutResult/pur/query */
export async function purQueryUsingPOST(
  body: WMS.BizStockOutPurResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockOutPurResultVO_>('/web/wms/bizStockOutResult/pur/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 零售销售记录列表导出 POST /web/wms/bizStockOutResult/retail/sale/export */
export async function exportUsingPOST(
  body: WMS.BizStockOutRetailSaleResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizStockOutResult/retail/sale/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 零售销售记录列表查询 POST /web/wms/bizStockOutResult/retail/sale/query */
export async function retailSaleQueryUsingPOST(
  body: WMS.BizStockOutRetailSaleResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockOutRetailSaleResultVO_>(
    '/web/wms/bizStockOutResult/retail/sale/query',
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

/** GSP销售记录列表查询 POST /web/wms/bizStockOutResult/sale/query */
export async function saleQueryUsingPOST(
  body: WMS.BizStockOutSaleResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockOutSaleResultVO_>('/web/wms/bizStockOutResult/sale/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
