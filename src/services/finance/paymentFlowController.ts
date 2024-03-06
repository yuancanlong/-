// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取付款核销文档明细信息 GET /web/finance/payment/flow/${param0} */
export async function getInfoUsingGET(
  params: {
    // path
    /** paymentId */
    paymentId: string;
  },
  options?: { [key: string]: any },
) {
  const { paymentId: param0, ...queryParams } = params;
  return request<FINANCE.PaymentFlowInfoVO>(`/web/finance/payment/flow/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除付款核销文档明细信息 DELETE /web/finance/payment/flow/${param1}/${param0} */
export async function deleteUsingDELETE(
  params: {
    // path
    /** id */
    id: string;
    /** paymentId */
    paymentId: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, paymentId: param1, ...queryParams } = params;
  return request<boolean>(`/web/finance/payment/flow/${param1}/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
