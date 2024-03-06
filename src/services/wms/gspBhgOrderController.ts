// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询GSP不合格记录上报列表 POST /web/wms/gspBhgOrder/query */
export async function queryUsingPOST(
  body: WMS.GspBhgOrderPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspBhgOrderVO_>('/web/wms/gspBhgOrder/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp不合格药品上报Xml POST /web/wms/gspBhgOrder/queryDocXml */
export async function queryDocXmlUsingPOST(
  body: WMS.GspBhgOrderPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.GspDocumentVO>('/web/wms/gspBhgOrder/queryDocXml', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修复gsp上报不合格错误数据 POST /web/wms/gspBhgOrder/repairErrorData */
export async function repairErrorDataUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspBhgOrder/repairErrorData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp不合格记录上报成功 POST /web/wms/gspBhgOrder/reportSucceed */
export async function reportSucceedUsingPOST(
  body: WMS.GspDealResultVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspBhgOrder/reportSucceed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp不合格记录上传处理结果更新 POST /web/wms/gspBhgOrder/updateDealResult */
export async function updateDealResultUsingPOST(
  body: WMS.GspDealResultVO[],
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspBhgOrder/updateDealResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
