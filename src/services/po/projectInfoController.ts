// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑项目 PUT /web/po/projectInfo */
export async function editUsingPUT(body: PO.ProjectInfoUpdateVO, options?: { [key: string]: any }) {
  return request<string>('/web/po/projectInfo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增项目 POST /web/po/projectInfo */
export async function saveUsingPOST(
  body: PO.ProjectInfoCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/projectInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 项目取消 GET /web/po/projectInfo/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/projectInfo/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 项目审核 POST /web/po/projectInfo/check/${param0} */
export async function checkUsingPOST(
  params: {
    // query
    /** pass */
    pass: boolean;
    /** remark */
    remark?: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/projectInfo/check/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取项目 GET /web/po/projectInfo/customer */
export async function getCustomerUsingGET(options?: { [key: string]: any }) {
  return request<PO.ProjectCustomerVO[]>('/web/po/projectInfo/customer', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 项目商品模板下载 POST /web/po/projectInfo/download/template */
export async function templateUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/po/projectInfo/download/template', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 商品导入 POST /web/po/projectInfo/import */
export async function importProjectSkuUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.ImportExcelResultVOProjectImportExcelVO_>('/web/po/projectInfo/import', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 项目所属供应商 POST /web/po/projectInfo/list-supplier */
export async function listBySupplierUsingPOST(
  body: PO.ProjectSupplierQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.ProjectSupplierVO[]>('/web/po/projectInfo/list-supplier', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询项目 POST /web/po/projectInfo/query */
export async function queryUsingPOST(
  body: PO.ProjectInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectInfoVO_>('/web/po/projectInfo/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询项目（采购员项目订阅） POST /web/po/projectInfo/query-buyer */
export async function queryByBuyerProjectSubscriptionUsingPOST(
  body: PO.ProjectInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectInfoVO_>('/web/po/projectInfo/query-buyer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询对应客户和商品的项目 POST /web/po/projectInfo/query-customer-ware-project */
export async function queryCustomerWareProjectUsingPOST(
  body: PO.ProjectInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectInfoVO_>('/web/po/projectInfo/query-customer-ware-project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 可选择的项目分页查询 POST /web/po/projectInfo/query-optional-project */
export async function queryOptionalProjectUsingPOST(
  body: PO.ProjectInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectInfoVO_>('/web/po/projectInfo/query-optional-project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 项目重启 GET /web/po/projectInfo/restart/${param0} */
export async function restartUsingGET(
  params: {
    // query
    /** reason */
    reason: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/projectInfo/restart/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 项目撤审 POST /web/po/projectInfo/revoke/${param0} */
export async function revokeUsingPOST(
  params: {
    // query
    /** remark */
    remark?: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/projectInfo/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 弹窗选择项目分页查询(采购员订阅项目) POST /web/po/projectInfo/select-query */
export async function queryPageBySelectProjectUsingPOST(
  body: PO.ProjectInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationProjectInfoVO_>('/web/po/projectInfo/select-query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 项目停止 GET /web/po/projectInfo/stop/${param0} */
export async function stopUsingGET(
  params: {
    // query
    /** reason */
    reason: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/projectInfo/stop/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取项目 GET /web/po/projectInfo/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.ProjectInfoInfoVO>(`/web/po/projectInfo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
