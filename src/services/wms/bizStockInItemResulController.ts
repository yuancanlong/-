// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 采购入库记录导出 POST /web/wms/bizStockInItemResult/poItemExport */
export async function poItemExportUsingPOST(
  body: WMS.BizStockInResultDetailInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizStockInItemResult/poItemExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购入库记录分页查询 POST /web/wms/bizStockInItemResult/poItemQuery */
export async function poItemQueryUsingPOST(
  body: WMS.BizStockInResultDetailInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockInResultDetailInfoVO_>(
    '/web/wms/bizStockInItemResult/poItemQuery',
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

/** 订阅商品采购入库记录分页查询 POST /web/wms/bizStockInItemResult/poSubWareItemQuery */
export async function poSubWareItemQueryUsingPOST(
  body: WMS.BizStockInResultDetailInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockInResultDetailInfoVO_>(
    '/web/wms/bizStockInItemResult/poSubWareItemQuery',
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

/** 销退入库记录导出 POST /web/wms/bizStockInItemResult/saleReturnItemExport */
export async function saleReturnItemExportUsingPOST(
  body: WMS.BizStockInResultDetailInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizStockInItemResult/saleReturnItemExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销退入库记录分页查询 POST /web/wms/bizStockInItemResult/saleReturnItemQuery */
export async function saleReturnItemQueryUsingPOST(
  body: WMS.BizStockInResultDetailInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockInResultDetailInfoVO_>(
    '/web/wms/bizStockInItemResult/saleReturnItemQuery',
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

/** 订阅商品采购入库记录导出 POST /web/wms/bizStockInItemResult/subWarePOItemExport */
export async function subWarePOItemExportUsingPOST(
  body: WMS.BizStockInResultDetailInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizStockInItemResult/subWarePOItemExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
