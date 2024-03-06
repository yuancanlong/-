// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消 POST /web/base/ware-document/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 商品编号 */
    skuId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/ware-document/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 审核 POST /web/base/ware-document/check */
export async function checkUsingPOST(
  body: BASE.BillCheckHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/ware-document/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出医疗器械-首营产品审批列表 POST /web/base/ware-document/exportApproveOfMedicalEquipment */
export async function exportApproveOfMedicalEquipmentUsingPOST(
  body: BASE.WareDocumentVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/ware-document/exportApproveOfMedicalEquipment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 单据详情 GET /web/base/ware-document/get */
export async function getUsingGET(
  params: {
    // query
    /** 单据编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.WareDocumentVO>('/web/base/ware-document/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 首营品种审批PDF POST /web/base/ware-document/getApprovalDocumentPDF */
export async function getApprovalDocumentPDFUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/web/base/ware-document/getApprovalDocumentPDF', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取变更商品数据（首次创建变更单据调用此API） GET /web/base/ware-document/getChangeSkuData */
export async function getChangeSkuDataUsingGET(
  params: {
    // query
    /** 原商品编码 */
    skuId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.WareDocumentVO>('/web/base/ware-document/getChangeSkuData', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取商品名称拼音 (全拼) GET /web/base/ware-document/getFullPinYin */
export async function getFullPinYinUsingGET(
  params: {
    // query
    /** skuName */
    skuName?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/ware-document/getFullPinYin', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取商品编码（首次创建首营单据调用此API） GET /web/base/ware-document/getSkuId */
export async function getSkuIdUsingGET(options?: { [key: string]: any }) {
  return request<string>('/web/base/ware-document/getSkuId', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 添加单据 POST /web/base/ware-document/insert */
export async function insertUsingPOST(body: BASE.WareDocumentVO, options?: { [key: string]: any }) {
  return request<string>('/web/base/ware-document/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 跳转新增变更单提示 存在返回原单据编号 POST /web/base/ware-document/isExistRuningDocument */
export async function isExistRuningDocumentUsingPOST(
  body: BASE.WareDocumentVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/ware-document/isExistRuningDocument', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 单据分页列表 POST /web/base/ware-document/list */
export async function listUsingPOST(
  body: BASE.WareDocumentVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareBriefDocumentVO_>('/web/base/ware-document/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 药品-首营审批列表 POST /web/base/ware-document/listApprove */
export async function listApproveUsingPOST(
  body: BASE.WareDocumentVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareBriefDocument_>('/web/base/ware-document/listApprove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 医疗器械-首营产品审批列表 POST /web/base/ware-document/listApproveOfMedicalEquipment */
export async function listApproveOfMedicalEquipmentUsingPOST(
  body: BASE.WareDocumentVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareMedicalEquipmentDocument_>(
    '/web/base/ware-document/listApproveOfMedicalEquipment',
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

/** 单据日志  单据编号必传 POST /web/base/ware-document/listLog */
export async function listLogUsingPOST(
  body: BASE.WareLogVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareLogVO_>('/web/base/ware-document/listLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 首营商品审批流程列表 POST /web/base/ware-document/listWareDocumentProcess */
export async function listWareDocumentProcessUsingPOST(
  params: {
    // query
    /** 单据编号 */
    billCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.WareFlowInstanceVO[]>('/web/base/ware-document/listWareDocumentProcess', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品日志 商品编号必传 POST /web/base/ware-document/listWareLog */
export async function listWareLogUsingPOST(
  body: BASE.WareLogVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationWareLogVO_>('/web/base/ware-document/listWareLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 动态验证商品必填项 POST /web/base/ware-document/loadRequiredConfig */
export async function loadRequiredConfigUsingPOST(options?: { [key: string]: any }) {
  return request<BASE.WareRequiredConfigVO[]>('/web/base/ware-document/loadRequiredConfig', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 撤销审核 POST /web/base/ware-document/revoke */
export async function revokeUsingPOST(
  body: BASE.BillRevokeHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/ware-document/revoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 单据提审 POST /web/base/ware-document/submitReview */
export async function submitReviewUsingPOST(
  body: BASE.BilSubmitReviewHandleVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/ware-document/submitReview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新修改 POST /web/base/ware-document/update */
export async function updateUsingPOST(body: BASE.WareDocumentVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/ware-document/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存变更单提示 返回具体提示信息 POST /web/base/ware-document/ware-tips */
export async function wareTipsUsingPOST(
  body: BASE.WareDocumentVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/ware-document/ware-tips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
