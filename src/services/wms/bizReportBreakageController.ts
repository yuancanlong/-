// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 报损单审核通过 POST /web/wms/bizReportBreakage/checkApprove */
export async function checkApproveUsingPOST(
  body: WMS.BizReportBreakageCheckVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/bizReportBreakage/checkApprove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 报损单审核拒绝 POST /web/wms/bizReportBreakage/checkCancel */
export async function checkCancelUsingPOST(
  body: WMS.BizReportBreakageCheckVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/bizReportBreakage/checkCancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 报损单导出 POST /web/wms/bizReportBreakage/export */
export async function exportUsingPOST(
  body: WMS.BizReportBreakagePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/bizReportBreakage/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取业务报损表 GET /web/wms/bizReportBreakage/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.BizReportBreakageVO>(`/web/wms/bizReportBreakage/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询业务报损表 POST /web/wms/bizReportBreakage/query */
export async function queryUsingPOST(
  body: WMS.BizReportBreakagePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizReportBreakageVO_>('/web/wms/bizReportBreakage/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
