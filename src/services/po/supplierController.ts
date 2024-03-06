// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 供应商结算账户信息 POST /web/po/supplier/account-list */
export async function accountListUsingPOST(
  params: {
    // query
    /** 供应商id */
    supplierId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.SupplierAccountVO[]>('/web/po/supplier/account-list', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 供应商地址信息 POST /web/po/supplier/address-list */
export async function addressListUsingPOST(
  params: {
    // query
    /** 供应商id */
    supplierId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.SupplierAddressListVO[]>('/web/po/supplier/address-list', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 生效 POST /web/po/supplier/batch-valid */
export async function batchValidUsingPOST(
  body: PO.SupplierValidVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/supplier/batch-valid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审核 POST /web/po/supplier/check */
export async function checkUsingPOST(
  params: {
    // query
    /** 供应商id */
    id?: string;
    /** 审核类型：1 业务审核 2：质量管理员审核 */
    type?: number;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/supplier/check', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 供应商受托人信息 POST /web/po/supplier/contacts-list */
export async function contactsListUsingPOST(
  params: {
    // query
    /** 供应商id */
    supplierId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.SupplierContactsVO[]>('/web/po/supplier/contacts-list', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建 POST /web/po/supplier/create */
export async function createUsingPOST(body: PO.SupplierInfoVO, options?: { [key: string]: any }) {
  return request<string>('/web/po/supplier/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下载全部证照 GET /web/po/supplier/down-all-license */
export async function downAllLicenseUsingGET(
  params: {
    // query
    /** 0 供应商 1 变更单 */
    dataType?: number;
    /** 供应商/变更单id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/web/po/supplier/down-all-license', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出药监局数据 POST /web/po/supplier/export-supplier-data */
export async function exportSupplierInfoUsingPOST(
  params: {
    // query
    /** 是否省内企业 */
    isInProvince?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/supplier/export-supplier-data', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取详情信息 GET /web/po/supplier/get */
export async function getUsingGET(
  params: {
    // query
    /** 供应商id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.SupplierInfoVO>('/web/po/supplier/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询分页列表 POST /web/po/supplier/list */
export async function listUsingPOST(
  body: PO.SupplierInfoVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationSupplierInfoListVO_>('/web/po/supplier/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 供应商是否存在（新增不传supplierId） POST /web/po/supplier/supplier-is-exist */
export async function isExistSupplierUsingPOST(
  params: {
    // query
    /** 市编码 */
    cityId?: string;
    /** 省编码 */
    provinceId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** areaId */
    areaId?: string;
    /** supplierId */
    supplierId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/supplier/supplier-is-exist', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 纳税人注册号是否存在（新增不传supplierId） POST /web/po/supplier/tax-is-exist */
export async function isExistNationalTaxNoUsingPOST(
  params: {
    // query
    /** 纳税人注册号 */
    nationalTaxNo?: string;
    /** supplierId */
    supplierId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/supplier/tax-is-exist', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新 POST /web/po/supplier/update */
export async function updateUsingPOST(body: PO.SupplierInfoVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/supplier/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 生效 POST /web/po/supplier/valid */
export async function validUsingPOST(
  params: {
    // query
    /** 供应商id */
    id?: string;
    /** false: 未生效 true: 生效 */
    isValid?: boolean;
    /** validReason */
    validReason?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/supplier/valid', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
