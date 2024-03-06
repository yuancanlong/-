// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询日志 POST /web/po/order/trace/list-all */
export async function listBySupplierUsingPOST(
  body: PO.OrderTraceQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.OrderTraceVO[]>('/web/po/order/trace/list-all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询变更单日志 POST /web/po/order/trace/list-supplier-change */
export async function listBySupplierChangeUsingPOST(
  params: {
    // query
    /** 单据编号 */
    id?: string;
    /** 操作内容 0 全部 1 基本信息 2 证照信息 */
    operateContent?: number;
  },
  options?: { [key: string]: any },
) {
  return request<PO.OrderTraceVO[]>('/web/po/order/trace/list-supplier-change', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
