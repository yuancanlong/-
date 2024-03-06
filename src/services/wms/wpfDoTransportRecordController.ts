// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/wpfDoTransportRecord/export */
export async function exportUsingPOST(
  body: WMS.WpfDoTransportRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/wpfDoTransportRecord/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询冷链运输记录 POST /web/wms/wpfDoTransportRecord/query */
export async function queryUsingPOST(
  body: WMS.WpfDoTransportRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfDoTransportRecordVO_>('/web/wms/wpfDoTransportRecord/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
