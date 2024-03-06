// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 调拨出库确认Json POST /web/wms/test/stockConfirm/allocateOutConfirmJson */
export async function allocateOutConfirmJsonUsingPOST(
  params: {
    // query
    /** 调拨出库id */
    orderCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/test/stockConfirm/allocateOutConfirmJson', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 销售出库确认Json POST /web/wms/test/stockConfirm/consignOrderJson */
export async function consignOrderConfirmJsonUsingPOST(
  params: {
    // query
    /** 销售出库通知单id */
    orderCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/test/stockConfirm/consignOrderJson', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 配送入库确认Json POST /web/wms/test/stockConfirm/deliveryInConfirmJson */
export async function deliveryInConfirmJsonUsingPOST(
  params: {
    // query
    /** 配送入库通知id */
    orderCode?: string;
    /** 单据类型 3-总部配送退货入库 4-门店配送入库 */
    type?: number;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/test/stockConfirm/deliveryInConfirmJson', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 配送出库确认Json POST /web/wms/test/stockConfirm/deliveryOutConfirmJson */
export async function deliveryOutConfirmJsonUsingPOST(
  params: {
    // query
    /** 配送出库通知id */
    orderCode?: string;
    /** 单据类型 1-总部配送出库 2-门店配送退货出库 */
    type?: number;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/test/stockConfirm/deliveryOutConfirmJson', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 采退出库确认Json POST /web/wms/test/stockConfirm/purReturnConfirmJson */
export async function purReturnConfirmJsonUsingPOST(
  params: {
    // query
    /** 采退通知单id */
    orderCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/test/stockConfirm/purReturnConfirmJson', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 采购入库确认Json POST /web/wms/test/stockConfirm/purStockInJson */
export async function purStockInConfirmJsonUsingPOST(
  params: {
    // query
    /** 采购入库通知单id */
    orderCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/test/stockConfirm/purStockInJson', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 销退入库确认Json POST /web/wms/test/stockConfirm/saleStockInJson */
export async function saleStockInConfirmJsonUsingPOST(
  params: {
    // query
    /** 销退入库通知单id */
    orderCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/test/stockConfirm/saleStockInJson', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 调拨入库单确认Json POST /web/wms/test/stockConfirm/transferStockInConfirmJson */
export async function transferStockInConfirmJsonUsingPOST(
  params: {
    // query
    /** 调拨入库通知单id */
    orderCode?: string;
    /** 单据类型 1：调拨入库通知单 2：调拨申请单 */
    type?: number;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/test/stockConfirm/transferStockInConfirmJson', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
