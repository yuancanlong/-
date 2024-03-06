// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 零售退货记录列表导出 POST /web/wms/retailSaleStockIn/statement/export */
export async function statementExportUsingPOST(
  body: WMS.RetailSalePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/retailSaleStockIn/statement/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 零售退货记录列表查询 POST /web/wms/retailSaleStockIn/statement/query */
export async function statementQueryUsingPOST(
  body: WMS.RetailSalePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationRetailSaleStockInDetailVO_>(
    '/web/wms/retailSaleStockIn/statement/query',
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
