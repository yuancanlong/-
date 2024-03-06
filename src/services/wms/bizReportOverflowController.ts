// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 报溢单审核通过 POST /web/wms/bizReportOverflow/checkApprove */
export async function checkApproveUsingPOST(
  body: WMS.BizReportOverflowCheckVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/bizReportOverflow/checkApprove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 报溢单审核拒绝 POST /web/wms/bizReportOverflow/checkCancel */
export async function checkCancelUsingPOST(
  body: WMS.BizReportOverflowCheckVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/bizReportOverflow/checkCancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出 POST /web/wms/bizReportOverflow/export */
export async function exportUsingPOST(
  body: WMS.BizReportOverflowPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizReportOverflow/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取业务报溢表 GET /web/wms/bizReportOverflow/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.BizReportOverflowVO>(`/web/wms/bizReportOverflow/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询业务报溢表 POST /web/wms/bizReportOverflow/query */
export async function queryUsingPOST(
  body: WMS.BizReportOverflowPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizReportOverflowVO_>('/web/wms/bizReportOverflow/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
