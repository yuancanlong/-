// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/gsp/delivery/return/stock-in-record/export */
export async function exportUsingPOST(
  body: WMS.GspDeliveryReturnStockInRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gsp/delivery/return/stock-in-record/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 POST /web/wms/gsp/delivery/return/stock-in-record/query */
export async function queryUsingPOST(
  body: WMS.GspDeliveryReturnStockInRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspDeliveryReturnStockInRecordVO_>(
    '/web/wms/gsp/delivery/return/stock-in-record/query',
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
