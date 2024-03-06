// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/wss/customer-document/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/customer-document/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核 POST /web/wss/customer-document/check */
export async function checkUsingPOST(
  body: WSS.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/customer-document/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下载全部证照 POST /web/wss/customer-document/down-all-license */
export async function downAllLicenseUsingPOST(
  params: {
    // query
    /** billId */
    billId: string;
    /** cusId */
    cusId: string;
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/web/wss/customer-document/down-all-license', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 单据详情 GET /web/wss/customer-document/get */
export async function getUsingGET(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.CustomerDocumentVO>('/web/wss/customer-document/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 首营客户审批PDF POST /web/wss/customer-document/getApprovalDocumentPDF */
export async function getApprovalDocumentPDFUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/web/wss/customer-document/getApprovalDocumentPDF', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取变更数据（首次创建变更单据调用此API） GET /web/wss/customer-document/getChangeSkuData */
export async function getChangeSkuDataUsingGET(
  params: {
    // query
    /** 原客户编码 */
    cusCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.CustomerDocumentVO>('/web/wss/customer-document/getChangeSkuData', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加单据 POST /web/wss/customer-document/insert */
export async function insertUsingPOST(
  body: WSS.CustomerDocumentVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wss/customer-document/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 单据分页列表 POST /web/wss/customer-document/list */
export async function listUsingPOST(
  body: WSS.CustomerDocumentVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationListCustomerDocumentVO_>('/web/wss/customer-document/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 首营客户审批列表 POST /web/wss/customer-document/listApprove */
export async function listApproveUsingPOST(
  body: WSS.CustomerDocumentVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationListCustomerDocumentVO_>('/web/wss/customer-document/listApprove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 首营客户审批流程列表 POST /web/wss/customer-document/listFlowIntanceProcessApprove */
export async function listFlowIntanceProcessApproveUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WSS.CustomerFlowInstanceVO[]>(
    '/web/wss/customer-document/listFlowIntanceProcessApprove',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 单据修改日志  POST /web/wss/customer-document/listLog */
export async function listLogUsingPOST(
  body: WSS.CustomerLogVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<WSS.PaginationCustomerLogVO_>('/web/wss/customer-document/listLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/wss/customer-document/revoke */
export async function revokeUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billCode?: string;
    /** 备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/customer-document/revoke', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 单据提审 POST /web/wss/customer-document/submitReview */
export async function submitReviewUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billCode?: string;
    /** 提审备注 */
    remark?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/customer-document/submitReview', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增变更单调用 已注册验证提示,已存在则返回已存在单据编号 POST /web/wss/customer-document/tips-cus */
export async function wareTipsUsingPOST(
  body: WSS.CustomerDocumentTipsVO,
  options?: { [key: string]: any },
) {
  return request<WSS.CustomerExistVO>('/web/wss/customer-document/tips-cus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新修改 POST /web/wss/customer-document/update */
export async function updateUsingPOST(
  body: WSS.CustomerDocumentVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wss/customer-document/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
