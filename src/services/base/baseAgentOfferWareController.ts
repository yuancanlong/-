// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消报价 POST /web/base/agent-Offer/cancel */
export async function cancelUsingPOST(
  params: {
    // query
    /** 报价单ID */
    offerSheetId: string;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/agent-Offer/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出 POST /web/base/agent-Offer/export */
export async function exportUsingPOST(
  body: BASE.BaseAgentOfferWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/agent-Offer/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量更新报价 POST /web/base/agent-Offer/importOfferWare */
export async function importOfferWareUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.WareImportResult>('/web/base/agent-Offer/importOfferWare', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 代销品报价列表(已匹配) POST /web/base/agent-Offer/list */
export async function listUsingPOST(
  body: BASE.BaseAgentOfferWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationBaseAgentOfferWareVO_>('/web/base/agent-Offer/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 货品报价操作日志列表 POST /web/base/agent-Offer/listLog */
export async function listLogUsingPOST(
  body: BASE.BaseAgentOfferLogVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationBaseAgentOfferLogVO_>('/web/base/agent-Offer/listLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 代销品报价列表(未匹配) POST /web/base/agent-Offer/listNoMatch */
export async function listNoMatchUsingPOST(
  body: BASE.BaseAgentOfferWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationBaseAgentOfferWareVO_>('/web/base/agent-Offer/listNoMatch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新报价 POST /web/base/agent-Offer/saveOffer */
export async function saveOfferUsingPOST(
  body: BASE.BaseAgentOfferVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/base/agent-Offer/saveOffer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
