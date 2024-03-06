// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑数据 PUT /web/po/pur/contract */
export async function editUsingPUT(body: PO.PurContractUpdateVO, options?: { [key: string]: any }) {
  return request<string>('/web/po/pur/contract', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存数据 POST /web/po/pur/contract */
export async function saveUsingPOST(
  body: PO.PurContractCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/pur/contract', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购合同取消 GET /web/po/pur/contract/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/pur/contract/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 采购合同审核 POST /web/po/pur/contract/check */
export async function checkUsingPOST(body: PO.ApplyCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/pur/contract/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购合同模板下载 POST /web/po/pur/contract/download/template */
export async function templateUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/po/pur/contract/download/template', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 采购合同商品导入 POST /web/po/pur/contract/import */
export async function importSkuUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
    /** 项目id（无项目无需传参） */
    projectInfoId?: string;
    /** 供应商id（必传） */
    supplierId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.PurContractImportVO>('/web/po/pur/contract/import', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 采购合同分页查询 POST /web/po/pur/contract/query */
export async function queryUsingPOST(
  body: PO.PurContractPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPurContractVO_>('/web/po/pur/contract/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购合同撤审 POST /web/po/pur/contract/revoke/${param0} */
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
  return request<boolean>(`/web/po/pur/contract/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 采购合同详情查询 GET /web/po/pur/contract/${param0} */
export async function getUsingGET(
  params: {
    // query
    /** isTag */
    isTag?: boolean;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.PurContractInfoVO>(`/web/po/pur/contract/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
