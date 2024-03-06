// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取gsp数据范围查询时间，仅用于gsp客户端 GET /web/wms/gspPurIn/getQueryTimeConfig */
export async function getQueryTimeConfigUsingGET(options?: { [key: string]: any }) {
  return request<WMS.GspQueryTimeConfigVO>('/web/wms/gspPurIn/getQueryTimeConfig', {
    method: 'GET',
    ...(options || {}),
  });
}

/** gsp上报数据异常检查结果 GET /web/wms/gspPurIn/gspDataCheckResult */
export async function gspDataCheckResultUsingGET(
  params: {
    // query
    /** gspType */
    gspType?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.GspCheckResultVO[]>('/web/wms/gspPurIn/gspDataCheckResult', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** gsp记录上报汇总 POST /web/wms/gspPurIn/listGspReportSum */
export async function listGspReportSumUsingPOST(options?: { [key: string]: any }) {
  return request<WMS.GspReportSumVO[]>('/web/wms/gspPurIn/listGspReportSum', {
    method: 'POST',
    ...(options || {}),
  });
}

/** gsp采购入库列表 POST /web/wms/gspPurIn/query */
export async function queryUsingPOST(
  body: WMS.ReportPurInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationReportPurInVO_>('/web/wms/gspPurIn/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp采购入库上报Xml POST /web/wms/gspPurIn/queryDocXml */
export async function queryDocXmlUsingPOST(
  body: WMS.ReportPurInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.GspDocumentVO>('/web/wms/gspPurIn/queryDocXml', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp上报采购入库明细分页查询 POST /web/wms/gspPurIn/queryPage */
export async function queryPageUsingPOST(
  body: WMS.ReportPurWareInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationReportPurInItemVO_>('/web/wms/gspPurIn/queryPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修复gsp上报采购入库错误数据 POST /web/wms/gspPurIn/repairItem */
export async function repairItemUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspPurIn/repairItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购入库gsp上报成功 POST /web/wms/gspPurIn/reportSucceed */
export async function reportSucceedUsingPOST(
  body: WMS.GspDealResultVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspPurIn/reportSucceed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购入库gsp上传处理结果更新 POST /web/wms/gspPurIn/updateDealResult */
export async function updateDealResultUsingPOST(
  body: WMS.GspDealResultVO[],
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspPurIn/updateDealResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
