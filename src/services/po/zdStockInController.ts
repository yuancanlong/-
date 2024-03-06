// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建直调入库单 POST /web/po/zd-stock-in/ */
export async function createUsingPOST(
  body: PO.ZdStockInCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/po/zd-stock-in/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑直调入库单 PUT /web/po/zd-stock-in/${param0} */
export async function editUsingPUT(
  params: {
    // path
    /** id */
    id: string;
  },
  body: PO.ZdStockInCreateVO,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string>(`/web/po/zd-stock-in/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
