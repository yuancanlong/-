// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出商品首出记录 POST /web/wms/gspWareFirstStockOut/export */
export async function exportFirstStockOutRecordUsingPOST(
  body: WMS.GspWareFirstStockOutRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspWareFirstStockOut/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 商品首出记录 POST /web/wms/gspWareFirstStockOut/query */
export async function queryFirstStockOutRecordUsingPOST(
  body: WMS.GspWareFirstStockOutRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspWareFirstStockOutRecordVO_>(
    '/web/wms/gspWareFirstStockOut/query',
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
