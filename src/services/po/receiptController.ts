// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建收货通知单 POST /web/po/receipt/ */
export async function createUsingPOST(body: PO.ReceiptOrderVO, options?: { [key: string]: any }) {
  return request<string>('/web/po/receipt/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑收货通知单 PUT /web/po/receipt/${param0} */
export async function editUsingPUT(
  params: {
    // path
    /** id */
    id: string;
  },
  body: PO.ReceiptOrderVO,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/receipt/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
