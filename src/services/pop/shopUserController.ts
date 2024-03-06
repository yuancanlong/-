// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 全部指定 POST /web/pop/shopUser/bingAllShopUser */
export async function bingAllShopInfoUsingPOST(
  body: POP.ShopInfoAllQueryVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/shopUser/bingAllShopUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 绑定店铺 POST /web/pop/shopUser/bingShopUser */
export async function bingShopUserUsingPOST(
  params: {
    // query
    /** userId */
    userId: string;
  },
  body: string[],
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/shopUser/bingShopUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 全部取消 GET /web/pop/shopUser/cancelAllShopUser */
export async function cancelAllShopUserUsingGET(
  params: {
    // query
    /** 用户编号 */
    userId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/pop/shopUser/cancelAllShopUser', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取用户列表(含门店数量) POST /web/pop/shopUser/list */
export async function listUsingPOST(body: POP.UserPageQueryVO, options?: { [key: string]: any }) {
  return request<POP.PaginationUserVO_>('/web/pop/shopUser/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户ID获取已指定店铺列表 GET /web/pop/shopUser/shopInfoBingList */
export async function shopInfoBingListUsingGET(
  params: {
    // query
    /** 用户编号 */
    userId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<POP.ShopUserVO[]>('/web/pop/shopUser/shopInfoBingList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询门店信息 POST /web/pop/shopUser/shopInfoList */
export async function shopInfoListUsingPOST(
  body: POP.ShopUserPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<POP.PaginationShopUserVO_>('/web/pop/shopUser/shopInfoList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
