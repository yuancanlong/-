// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增项目运营计划 POST /web/po/operationPlan/add */
export async function addUsingPOST(
  body: PO.OperationPlanCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/operationPlan/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 项目运营计划取消 GET /web/po/operationPlan/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/operationPlan/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 项目运营计划审核 POST /web/po/operationPlan/check */
export async function checkUsingPOST(body: PO.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/operationPlan/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 运营计划模板下载 POST /web/po/operationPlan/download/template */
export async function templateUsingPOST(
  body: PO.OperationPlanGetTemplateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/operationPlan/download/template', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑项目运营计划 POST /web/po/operationPlan/edit */
export async function editUsingPOST(
  body: PO.OperationPlanUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/operationPlan/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取项目运营计划 GET /web/po/operationPlan/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.OperationPlanInfoVO>(`/web/po/operationPlan/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导入运营计划 POST /web/po/operationPlan/import */
export async function importOperationPlanUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
    /** planEndMonth */
    planEndMonth: string;
    /** planStartMonth */
    planStartMonth: string;
    /** projectId */
    projectId: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.ImportOperationPlanResultVO>('/web/po/operationPlan/import', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取项目商品信息 POST /web/po/operationPlan/loadProjectWareInfo */
export async function loadProjectWareInfoUsingPOST(
  body: PO.OperationPlanGetTemplateVO,
  options?: { [key: string]: any },
) {
  return request<PO.OperationPlanDetailVO[]>('/web/po/operationPlan/loadProjectWareInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询项目运营计划 POST /web/po/operationPlan/query */
export async function queryUsingPOST(
  body: PO.OperationPlanPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationOperationPlanVO_>('/web/po/operationPlan/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 弹窗选择项目分页查询 POST /web/po/operationPlan/queryPlanProject */
export async function queryPlanProjectUsingPOST(
  body: PO.ProjectInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectInfoVO_>('/web/po/operationPlan/queryPlanProject', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/po/operationPlan/revoke */
export async function revokeUsingPOST(body: PO.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/operationPlan/revoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提审 POST /web/po/operationPlan/submitCheck */
export async function submitCheckUsingPOST(
  body: PO.BasicCheckVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/operationPlan/submitCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检查项目运营计划 POST /web/po/operationPlan/verifyPlan */
export async function verifyPlanUsingPOST(
  body: PO.OperationPlanGetTemplateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/operationPlan/verifyPlan', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
