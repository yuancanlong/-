// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /web/po/projectCreditAdjust/add */
export async function addUsingPOST(
  body: PO.ProjectCreditAdjustCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/projectCreditAdjust/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 敞口调整单取消 GET /web/po/projectCreditAdjust/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/projectCreditAdjust/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 审核 POST /web/po/projectCreditAdjust/check */
export async function checkUsingPOST(body: PO.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/projectCreditAdjust/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检查项目未完结的敞口调整单 GET /web/po/projectCreditAdjust/checkUnFinishedCreditAdjust */
export async function checkUnFinishedCreditAdjustUsingGET(
  params: {
    // query
    /** projectId */
    projectId: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/projectCreditAdjust/checkUnFinishedCreditAdjust', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取敞口调整单 GET /web/po/projectCreditAdjust/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.ProjectCreditAdjustVO>(`/web/po/projectCreditAdjust/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询项目敞口调整单 POST /web/po/projectCreditAdjust/query */
export async function queryUsingPOST(
  body: PO.ProjectCreditAdjustPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectCreditAdjustVO_>('/web/po/projectCreditAdjust/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/po/projectCreditAdjust/revoke */
export async function revokeUsingPOST(body: PO.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/projectCreditAdjust/revoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提审 POST /web/po/projectCreditAdjust/submitCheck */
export async function submitCheckUsingPOST(
  body: PO.BasicCheckVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/projectCreditAdjust/submitCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /web/po/projectCreditAdjust/update */
export async function updateUsingPOST(
  body: PO.ProjectCreditAdjustUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/projectCreditAdjust/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
