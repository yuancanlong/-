// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/wpfTransportRecord/out/export */
export async function exportUsingPOST(
  body: WMS.WpfTransportRecordOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/wpfTransportRecord/out/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询运输记录 POST /web/wms/wpfTransportRecord/query */
export async function queryUsingPOST(
  body: WMS.WpfTransportRecordPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfTransportRecordVO_>('/web/wms/wpfTransportRecord/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询发货运输记录 POST /web/wms/wpfTransportRecord/query/out */
export async function queryOutUsingPOST(
  body: WMS.WpfTransportRecordOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfTransportRecordOutVO_>('/web/wms/wpfTransportRecord/query/out', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
