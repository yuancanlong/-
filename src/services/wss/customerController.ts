// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出医疗机构及非省内往来企业 POST /web/wss/customer/exportCustomer */
export async function exportCustomerUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/wss/customer/exportCustomer', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 导出省内往来企业 POST /web/wss/customer/exportCustomerInTheProvince */
export async function exportCustomerInTheProvinceUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/wss/customer/exportCustomerInTheProvince', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 根据客户编号获取客户信息 GET /web/wss/customer/get */
export async function getUsingGET(
  params: {
    // query
    /** cusCode */
    cusCode: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.CustomerVO>('/web/wss/customer/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取新的客户编码 GET /web/wss/customer/get-cusCode */
export async function getCusCodeUsingGET(options?: { [key: string]: any }) {
  return request<string>('/web/wss/customer/get-cusCode', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据客户编号获取结算账户信息 GET /web/wss/customer/getSettleAccountByCusCode */
export async function getSettleAccountByCusCodeUsingGET(
  params: {
    // query
    /** cusCode */
    cusCode: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.CusSettleAccountVO[]>('/web/wss/customer/getSettleAccountByCusCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取批发客户列表 POST /web/wss/customer/list */
export async function listUsingPOST(
  body: WSS.CustomerVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationListCustomerVO_>('/web/wss/customer/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客户日志列表 POST /web/wss/customer/list-log */
export async function listLogUsingPOST(
  body: WSS.CustomerLogVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationCustomerLogVO_>('/web/wss/customer/list-log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客户生效/失效 POST /web/wss/customer/valid-cus */
export async function validUsingPOST(body: WSS.CustomerValidVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wss/customer/valid-cus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
