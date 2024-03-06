// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** GSP销售出库记录列表 POST /web/wms/gspSaleOut/query */
export async function queryUsingPOST(
  body: WMS.ReportSaleOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationReportSaleOutVO_>('/web/wms/gspSaleOut/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp销售出库上报Xml POST /web/wms/gspSaleOut/queryDocXml */
export async function queryDocXmlUsingPOST(
  body: WMS.ReportSaleOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.GspDocumentVO>('/web/wms/gspSaleOut/queryDocXml', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp上报销售出库记录分页查询 POST /web/wms/gspSaleOut/queryPage */
export async function queryPageUsingPOST(
  body: WMS.ReportSaleWareOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationReportSaleWareOutItemVO_>('/web/wms/gspSaleOut/queryPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修复gsp上报销售出库错误数据 POST /web/wms/gspSaleOut/repairItem */
export async function repairItemUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspSaleOut/repairItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售出库gsp上报成功 POST /web/wms/gspSaleOut/reportSucceed */
export async function reportSucceedUsingPOST(
  body: WMS.GspDealResultVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspSaleOut/reportSucceed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售出库gsp上传处理结果更新 POST /web/wms/gspSaleOut/updateDealResult */
export async function updateDealResultUsingPOST(
  body: WMS.GspDealResultVO[],
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspSaleOut/updateDealResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
