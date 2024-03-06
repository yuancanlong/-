// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/wpfAsnTransportRecord/export */
export async function exportUsingPOST(
  body: WMS.WpfAsnTransportRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/wpfAsnTransportRecord/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询冷链入库记录 POST /web/wms/wpfAsnTransportRecord/query */
export async function queryUsingPOST(
  body: WMS.WpfAsnTransportRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfAsnTransportRecordVO_>('/web/wms/wpfAsnTransportRecord/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
