// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加账户 POST /web/pop/tenant/addAccount */
export async function addAccountUsingPOST(body: POP.AccountVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/tenant/addAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加公司地址 POST /web/pop/tenant/addAddress */
export async function addAddressUsingPOST(
  body: POP.AddAddressVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/tenant/addAddress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑公司信息 POST /web/pop/tenant/addOrUpdate */
export async function addOrUpdateUsingPOST(
  body: POP.TenantUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/tenant/addOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除公司 POST /web/pop/tenant/delete */
export async function deleteUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/tenant/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除账户 GET /web/pop/tenant/deleteAccount */
export async function deleteAccountUsingGET(
  params: {
    // query
    /** 账户id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/tenant/deleteAccount', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除公司地址 GET /web/pop/tenant/deleteAddress */
export async function deleteAddressUsingGET(
  params: {
    // query
    /** 地址id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/tenant/deleteAddress', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量设置公司启用状态 POST /web/pop/tenant/enable */
export async function enableUsingPOST(body: POP.EnableVOString_, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/tenant/enable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取公司信息 GET /web/pop/tenant/get */
export async function getUsingGET(
  params: {
    // query
    /** 公司编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.TenantVO>('/web/pop/tenant/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取账户信息 GET /web/pop/tenant/getAccount */
export async function getAccountUsingGET(
  params: {
    // query
    /** 账户id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.TenantBalanceAccountVO>('/web/pop/tenant/getAccount', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取公司地址 GET /web/pop/tenant/getAddress */
export async function getAddressUsingGET(
  params: {
    // query
    /** 公司地址编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.TenantAddressVO>('/web/pop/tenant/getAddress', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所属租户信息 GET /web/pop/tenant/getTenantInfo */
export async function getTenantInfoUsingGET(options?: { [key: string]: any }) {
  return request<POP.TenantVO>('/web/pop/tenant/getTenantInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取公司列表 POST /web/pop/tenant/list */
export async function listUsingPOST(body: POP.TenantPageQueryVO, options?: { [key: string]: any }) {
  return request<POP.PaginationTenantVO_>('/web/pop/tenant/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取账户列表 GET /web/pop/tenant/listAccountByTenantId */
export async function listAccountByTenantIdUsingGET(options?: { [key: string]: any }) {
  return request<POP.AccountVO[]>('/web/pop/tenant/listAccountByTenantId', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取账户列表 GET /web/pop/tenant/listAccounts */
export async function listAccountsUsingGET(options?: { [key: string]: any }) {
  return request<POP.AccountVO[]>('/web/pop/tenant/listAccounts', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取公司地址列表 GET /web/pop/tenant/listAddress */
export async function listAddressUsingGET(options?: { [key: string]: any }) {
  return request<POP.TenantAddressVO[]>('/web/pop/tenant/listAddress', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取仓库列表 GET /web/pop/tenant/listWareHouseByTenantId */
export async function listWareHouseByTenantIdUsingGET(options?: { [key: string]: any }) {
  return request<POP.WareHouseVO[]>('/web/pop/tenant/listWareHouseByTenantId', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 编辑账户 POST /web/pop/tenant/updateAccount */
export async function updateAccountUsingPOST(
  body: POP.AccountVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/tenant/updateAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑公司地址 POST /web/pop/tenant/updateAddress */
export async function updateAddressUsingPOST(
  body: POP.UpdateAddressVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/tenant/updateAddress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新公司基本信息 POST /web/pop/tenant/updateBaseInfo */
export async function updateBaseInfoUsingPOST(
  body: POP.TenantVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/tenant/updateBaseInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
