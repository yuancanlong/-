// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取项目敞口剩余额度 POST /web/po/projectCredit/balance-amt */
export async function getBalanceAmtUsingPOST(
  params: {
    // query
    /** projectInfoId */
    projectInfoId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<number>('/web/po/projectCredit/balance-amt', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取项目主表 GET /web/po/projectCredit/getByProjectInfoId/${param0} */
export async function getByProjectInfoIdUsingGET(
  params: {
    // path
    /** projectInfoId */
    projectInfoId: string;
  },
  options?: { [key: string]: any },
) {
  const { projectInfoId: param0, ...queryParams } = params;
  return request<PO.ProjectCreditVO>(`/web/po/projectCredit/getByProjectInfoId/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 项目敞口运营报表明细 POST /web/po/projectCredit/projectPlanReportDetail */
export async function projectPlanReportDetailUsingPOST(
  params: {
    // query
    /** planMonth */
    planMonth: number;
    /** planYear */
    planYear: number;
    /** projectId */
    projectId: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.ProjectPlanReportDetailVO[]>('/web/po/projectCredit/projectPlanReportDetail', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询项目敞口 POST /web/po/projectCredit/query */
export async function queryUsingPOST(
  body: PO.ProjectCreditPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectCreditVO_>('/web/po/projectCredit/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取项目主表 GET /web/po/projectCredit/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.ProjectCreditVO>(`/web/po/projectCredit/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
