// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消报价 POST /web/base/aljk-Offer/cancel */
export async function cancelUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/base/aljk-Offer/cancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出 POST /web/base/aljk-Offer/export */
export async function exportWareUsingPOST(
  body: BASE.AljkOfferWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<string>('/web/base/aljk-Offer/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量更新报价 POST /web/base/aljk-Offer/importOfferWare */
export async function importOfferWareUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BASE.WareImportResult>('/web/base/aljk-Offer/importOfferWare', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 货品报价列表(已匹配) POST /web/base/aljk-Offer/list */
export async function listUsingPOST(
  body: BASE.AljkOfferWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationAljkOfferWareVO_>('/web/base/aljk-Offer/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 货品报价操作日志列表 POST /web/base/aljk-Offer/listLog */
export async function listLogUsingPOST(
  body: BASE.AljkOfferLogVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationAljkOfferLogVO_>('/web/base/aljk-Offer/listLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 货品报价列表(未匹配) POST /web/base/aljk-Offer/listNoMatch */
export async function listNoMatchUsingPOST(
  body: BASE.AljkOfferWareVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<BASE.PaginationAljkOfferWareVO_>('/web/base/aljk-Offer/listNoMatch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存报价 POST /web/base/aljk-Offer/saveOffer */
export async function saveOfferUsingPOST(body: BASE.AljkOfferVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/base/aljk-Offer/saveOffer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
