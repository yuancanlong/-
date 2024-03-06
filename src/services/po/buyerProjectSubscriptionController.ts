// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加订阅 POST /web/po/buyerProjectSubscription/add-subscribe */
export async function addSubscribeUsingPOST(
  body: PO.BuyerProjectSubscriptionVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/po/buyerProjectSubscription/add-subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消订阅 POST /web/po/buyerProjectSubscription/cancel-subscribe/${param0} */
export async function cancelSubscribeUsingPOST(
  params: {
    // path
    /** 项目id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/buyerProjectSubscription/cancel-subscribe/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 采购员项目订阅列表 POST /web/po/buyerProjectSubscription/list/${param0} */
export async function listUsingPOST(
  params: {
    // path
    /** 项目id */
    projectInfoId: string;
  },
  options?: { [key: string]: any },
) {
  const { projectInfoId: param0, ...queryParams } = params;
  return request<PO.BuyerProjectSubscriptionVO[]>(
    `/web/po/buyerProjectSubscription/list/${param0}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}
