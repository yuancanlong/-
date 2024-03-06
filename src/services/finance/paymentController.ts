// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑付款核销表 PUT /web/finance/payment */
export async function editUsingPUT(
  body: FINANCE.PaymentUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/finance/payment', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增付款核销表 POST /web/finance/payment */
export async function saveUsingPOST(
  body: FINANCE.PaymentCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/finance/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 核销数据保存/编辑 POST /web/finance/payment/audit-edit */
export async function auditEditUsingPOST(
  body: FINANCE.PaymentFlowCreateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/finance/payment/audit-edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 核销 POST /web/finance/payment/audit/${param0} */
export async function auditUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/finance/payment/audit/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 付款核销表取消 GET /web/finance/payment/cancel/${param0} */
export async function cancelUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/finance/payment/cancel/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 付款核销表审核 GET /web/finance/payment/check/${param0} */
export async function checkUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/finance/payment/check/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 导出PDF POST /web/finance/payment/export-pdf/${param0} */
export async function exportPdfUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string>(`/web/finance/payment/export-pdf/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 是否要弹出应收单列表 POST /web/finance/payment/isShowDialog/${param0} */
export async function showDialogUsingPOST(
  params: {
    // query
    /** payerId */
    payerId: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/finance/payment/isShowDialog/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 应收单列表 GET /web/finance/payment/listNoWriteoff */
export async function listNoWriteoffUsingGET(
  params: {
    // query
    /** payerId */
    payerId: string;
  },
  options?: { [key: string]: any },
) {
  return request<FINANCE.OptionalRecvReceivableOrPayableItemVO[]>(
    '/web/finance/payment/listNoWriteoff',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询付款核销表 POST /web/finance/payment/query */
export async function queryUsingPOST(
  body: FINANCE.PaymentPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<FINANCE.PaginationPaymentVO_>('/web/finance/payment/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取付款核销表 GET /web/finance/payment/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<FINANCE.PaymentInfoVO>(`/web/finance/payment/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
