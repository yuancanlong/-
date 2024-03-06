// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出商品首入记录记录 POST /web/wms/gsp/in/ware/first/record/export */
export async function exportUsingPOST(
  body: WMS.WareFirstInRecordViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gsp/in/ware/first/record/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /web/wms/gsp/in/ware/first/record/query */
export async function queryUsingPOST(
  body: WMS.WareFirstInRecordViewPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWareFirstInRecordViewVO_>(
    '/web/wms/gsp/in/ware/first/record/query',
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
