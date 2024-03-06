// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 审核 POST /web/wms/transferDifference/check */
export async function checkUsingPOST(body: WMS.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/transferDifference/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 调拨差异单列表 GET /web/wms/transferDifference/detail */
export async function getDetailUsingGET(
  params: {
    // query
    /** 编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.TransferDifferenceVO>('/web/wms/transferDifference/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出调拨差异单 POST /web/wms/transferDifference/export */
export async function exportUsingPOST(
  body: WMS.TransferDifferencePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/transferDifference/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 调拨差异单列表 POST /web/wms/transferDifference/query */
export async function queryUsingPOST(
  body: WMS.TransferDifferencePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationTransferDifferenceVO_>('/web/wms/transferDifference/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/wms/transferDifference/revoke */
export async function revokeUsingPOST(body: WMS.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/transferDifference/revoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存 POST /web/wms/transferDifference/save */
export async function saveUsingPOST(
  body: WMS.TransferDifferenceUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/transferDifference/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提审 POST /web/wms/transferDifference/submitCheck */
export async function submitCheckUsingPOST(
  body: WMS.BasicCheckVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/transferDifference/submitCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
