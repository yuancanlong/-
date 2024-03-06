// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出药品养护记录 POST /web/wms/wpfErpMaintain/exportMaintainDetail */
export async function exportMaintainDetailUsingPOST(
  body: WMS.WpfErpMaintainDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/wpfErpMaintain/exportMaintainDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询药品养护记录 POST /web/wms/wpfErpMaintain/query */
export async function queryUsingPOST(
  body: WMS.WpfErpMaintainDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfErpMaintainDetailVO_>('/web/wms/wpfErpMaintain/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 药品养护档案分页查询 POST /web/wms/wpfErpMaintain/queryRecordFile */
export async function queryRecordFileUsingPOST(
  body: WMS.WpfErpMaintainDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfRecordFileDetailVO_>('/web/wms/wpfErpMaintain/queryRecordFile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
