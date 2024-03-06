// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 作废 POST /web/wss/sale-invoice/cancel */
export async function cancelUsingPOST(
  body: WSS.SaleInvoiceCancelVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice/cancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 测试直接调用创建批次存货出库已开票数据 GET /web/wss/sale-invoice/createStockInboundEachSettleTax */
export async function createStockInboundEachSettleTaxUsingGET(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice/createStockInboundEachSettleTax', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 POST /web/wss/sale-invoice/edit */
export async function editUsingPOST(body: WSS.SaleInvoiceEditVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wss/sale-invoice/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 补票 POST /web/wss/sale-invoice/enter */
export async function enterUsingPOST(
  body: WSS.SaleInvoiceEnterVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice/enter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 商品开票查询导出明细 POST /web/wss/sale-invoice/exportDetail */
export async function exportDetailUsingPOST(
  body: WSS.SaleInvoiceWareExportVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-invoice/exportDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取销售开票单 GET /web/wss/sale-invoice/get */
export async function getUsingGET(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleInvoiceExpandVO>('/web/wss/sale-invoice/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取电子发票下载地址 POST /web/wss/sale-invoice/getPDF */
export async function getPDFUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice/getPDF', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询申请单下有多少个开票单 GET /web/wss/sale-invoice/invoiceCount */
export async function invoiceCountUsingGET(
  params: {
    // query
    /** 申请单号 */
    originBillId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<number>('/web/wss/sale-invoice/invoiceCount', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 开票 POST /web/wss/sale-invoice/invoicing */
export async function invoicingUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice/invoicing', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取销售开票列表 POST /web/wss/sale-invoice/list */
export async function listUsingPOST(
  body: WSS.SaleInvoiceVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSaleInvoiceVO_>('/web/wss/sale-invoice/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id获取商品开票详情 GET /web/wss/sale-invoice/listDetailByWare */
export async function listDetailByWareUsingGET(
  params: {
    // query
    /** id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleInvoiceWareBillVO[]>('/web/wss/sale-invoice/listDetailByWare', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取销售开票单操作日志列表 GET /web/wss/sale-invoice/listLog */
export async function listLogUsingGET(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleBillLogVO[]>('/web/wss/sale-invoice/listLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品开票查询 POST /web/wss/sale-invoice/listWare */
export async function listWareUsingPOST(
  body: WSS.SaleInvoiceWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationSaleInvoiceWareVO_>('/web/wss/sale-invoice/listWare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 转线下开票/取消转线下开票 POST /web/wss/sale-invoice/transLine */
export async function transLineUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billId?: string;
    /** 是否转线下(1：转线下；0：取消转线下) */
    isOffLine?: number;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice/transLine', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 上传发票图片 POST /web/wss/sale-invoice/uploadInvoice */
export async function uploadInvoiceUsingPOST(
  body: WSS.UploadInvoiceVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-invoice/uploadInvoice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
