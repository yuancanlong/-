// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增商品订阅 POST /web/base/staffWareSubscription/create */
export async function createUsingPOST(
  params: {
    // query
    /** userId */
    userId: string;
  },
  body: string[],
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/staffWareSubscription/create', {
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

/** 导出(按条件) POST /web/base/staffWareSubscription/export */
export async function exportUsingPOST(
  body: BASE.StaffWareSubscriptionPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/staffWareSubscription/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量导入 POST /web/base/staffWareSubscription/importData */
export async function importDataUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.WareImportResult>('/web/base/staffWareSubscription/importData', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 未订阅的商品列表 POST /web/base/staffWareSubscription/listNoSubscriptionToWare */
export async function listNoSubscriptionToWareUsingPOST(
  body: BASE.StaffWareSubscriptionPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareBriefVO_>(
    '/web/base/staffWareSubscription/listNoSubscriptionToWare',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 商品订阅管理列表 POST /web/base/staffWareSubscription/query */
export async function queryUsingPOST(
  body: BASE.StaffWareSubscriptionPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationStaffWareSubscriptionVO_>('/web/base/staffWareSubscription/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 停用/启用 POST /web/base/staffWareSubscription/updateStatus */
export async function updateStatusUsingPOST(
  params: {
    // query
    /** 订阅ID */
    id: string;
    /** 是否启用 0-停用 1-启用 */
    isEnabled: number;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/staffWareSubscription/updateStatus', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
