// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 批量审核订单 POST /web/wss/order/batchCheck */
export async function batchCheckUsingPOST(
  body: WSS.OrderHandleVO,
  options?: { [key: string]: any },
) {
  return request<WSS.OrderBatchCheckVO>('/web/wss/order/batchCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消订单 POST /web/wss/order/cancel */
export async function cancelUsingPOST(body: WSS.OrderHandleVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wss/order/cancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消出库通知单 POST /web/wss/order/cancelOutNotice */
export async function cancelOutNoticeUsingPOST(
  params: {
    // query
    /** 订单编码 */
    orderId?: string;
    /** 出库通知单编码 */
    outNoticeId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/order/cancelOutNotice', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核订单 POST /web/wss/order/check */
export async function checkUsingPOST(body: WSS.OrderHandleVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wss/order/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 关闭订单 POST /web/wss/order/close */
export async function closeUsingPOST(body: WSS.OrderHandleVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wss/order/close', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建订单 POST /web/wss/order/create */
export async function createUsingPOST(body: WSS.OrderUpdateVO, options?: { [key: string]: any }) {
  return request<string>('/web/wss/order/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** （预收款确认）新增订单预收款明细 POST /web/wss/order/createOrderReceiptDetail */
export async function createOrderReceiptDetailUsingPOST(
  body: WSS.OrderReceiptDetailUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/order/createOrderReceiptDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑订单 POST /web/wss/order/edit */
export async function editUsingPOST(body: WSS.OrderUpdateVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wss/order/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 订单导出:  导出所选（只传勾选的订单id），导出当前条件（传搜索的字段） POST /web/wss/order/export */
export async function exportUsingPOST(
  body: WSS.OrderVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/order/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出预收款确认信息记录 POST /web/wss/order/exportReceiptDetail */
export async function exportReceiptDetailUsingPOST(
  body: WSS.OrderVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/order/exportReceiptDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取批发订单 GET /web/wss/order/get */
export async function getUsingGET(
  params: {
    // query
    /** 订单编码 */
    orderId?: string;
    /** 详情：0；编辑复制：1（编辑复制的时候会查出商品库存及效期还有是否有GSP经营范围、是否批件到期） */
    type?: number;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.OrderExpandVO>('/web/wss/order/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取订单运费配置 GET /web/wss/order/getFreightConfig */
export async function getFreightConfigUsingGET(options?: { [key: string]: any }) {
  return request<WSS.OrderFreightVO>('/web/wss/order/getFreightConfig', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据订单Id、包裹编码获取批发订单包裹明细 GET /web/wss/order/getPackageDetail */
export async function getPackageDetailUsingGET(
  params: {
    // query
    /** 订单编码 */
    orderId?: string;
    /** 包裹编码 */
    packageCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.OrderPackageDetailVO>('/web/wss/order/getPackageDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品导入 POST /web/wss/order/importWare */
export async function importWareUsingPOST(
  params: {
    // query
    /** 客户编码 */
    cusId?: string;
    /** 文件 */
    file?: string;
    /** 仓库编码 */
    whId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.OrderWareImportResultVO>('/web/wss/order/importWare', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取批发订单列表 POST /web/wss/order/list */
export async function listUsingPOST(body: WSS.OrderVOPageQuery, options?: { [key: string]: any }) {
  return request<WSS.PaginationOrderVO_>('/web/wss/order/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取商品指定批次 POST /web/wss/order/listBatchNo */
export async function listBatchNoUsingPOST(
  body: WSS.BatchNoQueryVO,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationStockBatchNoVO_>('/web/wss/order/listBatchNo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取批发订单操作日志列表 POST /web/wss/order/listLog */
export async function listLogUsingPOST(
  body: WSS.OrderTraceVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationOrderTraceVO_>('/web/wss/order/listLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取批发订单出库通知列表 GET /web/wss/order/listOutDetail */
export async function listOutDetailUsingGET(
  params: {
    // query
    /** 订单编码 */
    orderId?: string;
    /** 状态（0：未通知 1：已通知） */
    status?: number;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.OrderOutDetailVO[]>('/web/wss/order/listOutDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取出库通知单列表 GET /web/wss/order/listOutNotice */
export async function listOutNoticeUsingGET(
  params: {
    // query
    /** 订单编码 */
    orderId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleOutNoticeVO[]>('/web/wss/order/listOutNotice', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据单位编码查询收款单 POST /web/wss/order/listReceiptByCusId */
export async function listReceiptByCusIdUsingPOST(
  params: {
    // query
    /** 单位编码 */
    cusId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.CusOrderReceiptVO[]>('/web/wss/order/listReceiptByCusId', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 锁定库存 POST /web/wss/order/lockStock */
export async function lockStockUsingPOST(
  body: WSS.OrderHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/order/lockStock', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 出库通知 POST /web/wss/order/outApply */
export async function outApplyUsingPOST(
  body: WSS.OrderOutApplyVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/order/outApply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/wss/order/revoke */
export async function revokeUsingPOST(
  body: WSS.OrderRevokeHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/order/revoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提审 POST /web/wss/order/submitReview */
export async function submitReviewUsingPOST(
  body: WSS.OrderSubmitReviewHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/order/submitReview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 挂起订单 POST /web/wss/order/suspend */
export async function suspendUsingPOST(body: WSS.OrderHandleVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wss/order/suspend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消挂起订单 POST /web/wss/order/suspendRelease */
export async function suspendReleaseUsingPOST(
  body: WSS.OrderHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/order/suspendRelease', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 解锁库存 POST /web/wss/order/unLockStock */
export async function unLockStockUsingPOST(
  body: WSS.OrderHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/order/unLockStock', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 解锁订单 POST /web/wss/order/unlock */
export async function unlockUsingPOST(body: WSS.OrderHandleVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/wss/order/unlock', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建导入销售单任务 POST /web/wss/order/uploadImport */
export async function uploadImportUsingPOST(
  params: {
    // query
    /** 导入的excel文件路径 */
    excelFilePath?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/order/uploadImport', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
