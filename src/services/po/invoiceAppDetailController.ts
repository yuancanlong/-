// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取出入库单据明细信息 POST /web/po/invoice/app/detail/biz/detail */
export async function getCheckDetailsUsingPOST(
  body: PO.InvoiceBizResultSelectVO[],
  options?: { [key: string]: any },
) {
  return request<PO.InvoiceAppDetailVO[]>('/web/po/invoice/app/detail/biz/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询出入库结果单单据 POST /web/po/invoice/app/detail/biz/list */
export async function queryOfPurOrderUsingPOST(
  body: PO.InvoiceBizResultSelectVO[],
  options?: { [key: string]: any },
) {
  return request<PO.BizStockResultVO[]>('/web/po/invoice/app/detail/biz/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询出入库结果单单据 POST /web/po/invoice/app/detail/biz/query */
export async function queryBizResultUsingPOST(
  body: PO.BizStockResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationBizStockResultVO_>('/web/po/invoice/app/detail/biz/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取出入库单据明细信息 GET /web/po/invoice/app/detail/${param0}/order/${param2}/type/${param1} */
export async function getDetailUsingGET(
  params: {
    // path
    /** invoiceAppId */
    invoiceAppId: string;
    /** orderType */
    orderType: number;
    /** originalOrderId */
    originalOrderId: string;
  },
  options?: { [key: string]: any },
) {
  const {
    invoiceAppId: param0,
    orderType: param1,
    originalOrderId: param2,
    ...queryParams
  } = params;
  return request<PO.InvoiceAppDetailVO[]>(
    `/web/po/invoice/app/detail/${param0}/order/${param2}/type/${param1}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}
