// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/gsp/delivery/stock-out-record/export */
export async function exportUsingPOST(
  body: WMS.GspDeliveryStockOutRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gsp/delivery/stock-out-record/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 POST /web/wms/gsp/delivery/stock-out-record/query */
export async function queryUsingPOST(
  body: WMS.GspDeliveryStockOutRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspDeliveryStockOutRecordVO_>(
    '/web/wms/gsp/delivery/stock-out-record/query',
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
