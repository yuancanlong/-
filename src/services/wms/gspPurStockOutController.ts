// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询采退出库记录列表 POST /web/wms/gspPurOut/query */
export async function queryUsingPOST(
  body: WMS.GspPurStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspPurStockOutVO_>('/web/wms/gspPurOut/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询(gsp上报)采退出库明细列表 POST /web/wms/gspPurOut/queryDetailList */
export async function queryDetailListUsingPOST(
  body: WMS.GspPurStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspPurStockOutItemVO_>('/web/wms/gspPurOut/queryDetailList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp采退出库上报Xml POST /web/wms/gspPurOut/queryDocXml */
export async function queryDocXmlUsingPOST(
  body: WMS.GspPurStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.GspDocumentVO>('/web/wms/gspPurOut/queryDocXml', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修复gsp上报采购出库数据 POST /web/wms/gspPurOut/repairErrorData */
export async function repairErrorDataUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspPurOut/repairErrorData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp采退出库上报成功 POST /web/wms/gspPurOut/reportSucceed */
export async function reportSucceedUsingPOST(
  body: WMS.GspDealResultVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspPurOut/reportSucceed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp采退出库上传处理结果更新 POST /web/wms/gspPurOut/updateDealResult */
export async function updateDealResultUsingPOST(
  body: WMS.GspDealResultVO[],
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspPurOut/updateDealResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
