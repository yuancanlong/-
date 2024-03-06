// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /web/po/projectWareAdjust/add */
export async function addUsingPOST(
  body: PO.ProjectWareAdjustCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/projectWareAdjust/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 商品调整单取消 GET /web/po/projectWareAdjust/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/projectWareAdjust/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 审核 POST /web/po/projectWareAdjust/check */
export async function checkUsingPOST(body: PO.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/projectWareAdjust/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取商品调整单 GET /web/po/projectWareAdjust/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.ProjectWareAdjustVO>(`/web/po/projectWareAdjust/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询项目商品调整单 POST /web/po/projectWareAdjust/query */
export async function queryUsingPOST(
  body: PO.ProjectWareAdjustPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectWareAdjustVO_>('/web/po/projectWareAdjust/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询项目商品调整日志 POST /web/po/projectWareAdjust/queryAdjustLog */
export async function queryAdjustLogUsingPOST(
  body: PO.ProjectWareAdjustLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectWareAdjustVO_>('/web/po/projectWareAdjust/queryAdjustLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/po/projectWareAdjust/revoke */
export async function revokeUsingPOST(body: PO.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/projectWareAdjust/revoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提审 POST /web/po/projectWareAdjust/submitCheck */
export async function submitCheckUsingPOST(
  body: PO.BasicCheckVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/projectWareAdjust/submitCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /web/po/projectWareAdjust/update */
export async function updateUsingPOST(
  body: PO.ProjectWareAdjustUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/projectWareAdjust/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
