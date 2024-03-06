// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/wss/sale-checking-bill/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 销售对账单编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-checking-bill/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核、撤销审核 POST /web/wss/sale-checking-bill/check */
export async function checkUsingPOST(
  body: WSS.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-checking-bill/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增销售对账单 POST /web/wss/sale-checking-bill/create */
export async function createUsingPOST(
  body: WSS.SaleCheckingBillUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-checking-bill/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑销售对账单 POST /web/wss/sale-checking-bill/edit */
export async function editUsingPOST(
  body: WSS.SaleCheckingBillUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-checking-bill/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出Excel POST /web/wss/sale-checking-bill/exportExcel */
export async function exportExcelUsingPOST(
  body: WSS.SaleCheckingBillVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-checking-bill/exportExcel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出PDF POST /web/wss/sale-checking-bill/exportPDF */
export async function exportPDFUsingPOST(
  params: {
    // query
    /** 销售对账单编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/sale-checking-bill/exportPDF', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据Id获取销售对账单单据 GET /web/wss/sale-checking-bill/get */
export async function getUsingGET(
  params: {
    // query
    /** 销售对账单编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleCheckingBillExpandVO>('/web/wss/sale-checking-bill/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取销售对账单列表 POST /web/wss/sale-checking-bill/list */
export async function listUsingPOST(
  body: WSS.SaleCheckingBillVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationBillVO_>('/web/wss/sale-checking-bill/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据对账单号获取对账单明细（销售结算单用到） POST /web/wss/sale-checking-bill/listBillDetail */
export async function listBillDetailUsingPOST(
  body: WSS.BillDetailParamVO,
  options?: { [key: string]: any },
) {
  return request<WSS.CheckingBillDetailVO[]>('/web/wss/sale-checking-bill/listBillDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 选择销售对账单列表（销售结算单用到） POST /web/wss/sale-checking-bill/listByCus */
export async function listByCusUsingPOST(
  body: WSS.SaleCheckingBillVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationBillVO_>('/web/wss/sale-checking-bill/listByCus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取销售对账单日志列表 GET /web/wss/sale-checking-bill/listLog */
export async function listLogUsingGET(
  params: {
    // query
    /** 销售对账单编号 */
    billId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.SaleBillLogVO[]>('/web/wss/sale-checking-bill/listLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取原单据列表 POST /web/wss/sale-checking-bill/listOriginBill */
export async function listOriginBillUsingPOST(
  body: WSS.OriginBillVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationOriginBillVO_>('/web/wss/sale-checking-bill/listOriginBill', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据原单号获取原单据明细 POST /web/wss/sale-checking-bill/listOriginBillDetail */
export async function listOriginBillDetailUsingPOST(
  body: WSS.OriginBillSelectVO[],
  options?: { [key: string]: any },
) {
  return request<WSS.SaleCheckingOriginBillVO[]>(
    '/web/wss/sale-checking-bill/listOriginBillDetail',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 提审 POST /web/wss/sale-checking-bill/submitReview */
export async function submitReviewUsingPOST(
  params: {
    // query
    /** 销售对账单编号 */
    billId?: string;
    /** 提审备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.ArticulationResultVO>('/web/wss/sale-checking-bill/submitReview', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建导入对账单明细任务 POST /web/wss/sale-checking-bill/uploadImport */
export async function uploadImportUsingPOST(
  params: {
    // query
    /** 销售对账单编号 */
    billId?: string;
    /** 导入的excel文件路径 */
    excelFilePath?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/sale-checking-bill/uploadImport', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
