// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** erp查询GSP上报省药监局损毁出库明细 POST /web/wms/gspDamageOut/listPage */
export async function listPageUsingPOST(
  body: WMS.ReportDamageOutDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationReportDamageOutDetailVO_>('/web/wms/gspDamageOut/listPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客户端查询GSP上报省局损毁出库Xml POST /web/wms/gspDamageOut/queryDocXml */
export async function queryDocXmlUsingPOST(
  body: WMS.ReportDamageOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.GspDocumentVO>('/web/wms/gspDamageOut/queryDocXml', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客户端查询GSP上报省局损毁出库记录 POST /web/wms/gspDamageOut/queryPage */
export async function queryPageUsingPOST(
  body: WMS.ReportDamageOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationReportDamageOutVO_>('/web/wms/gspDamageOut/queryPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修复gsp上报损毁出库错误数据 POST /web/wms/gspDamageOut/repairItem */
export async function repairItemUsingPOST(body: number[], options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspDamageOut/repairItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 损毁出库gsp上报成功 POST /web/wms/gspDamageOut/reportSucceed */
export async function reportSucceedUsingPOST(
  body: WMS.GspDealResultVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspDamageOut/reportSucceed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 损毁出库gsp上传处理结果更新 POST /web/wms/gspDamageOut/updateDealResult */
export async function updateDealResultUsingPOST(
  body: WMS.GspDealResultVO[],
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspDamageOut/updateDealResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
