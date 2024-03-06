// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** GSP(批发订单)销售退货入库记录列表 POST /web/wms/gspSaleReturnIn/query */
export async function queryUsingPOST(
  body: WMS.ReportSaleReturnInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationReportSaleReturnInVO_>('/web/wms/gspSaleReturnIn/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp(批发订单)销售退货入库上报Xml POST /web/wms/gspSaleReturnIn/queryDocXml */
export async function queryDocXmlUsingPOST(
  body: WMS.ReportSaleReturnInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.GspDocumentVO>('/web/wms/gspSaleReturnIn/queryDocXml', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** GSP(零售订单)销售退货入库记录列表 POST /web/wms/gspSaleReturnIn/queryOms */
export async function queryOmsUsingPOST(
  body: WMS.ReportSaleReturnInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationReportSaleReturnInVO_>('/web/wms/gspSaleReturnIn/queryOms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp(零售订单)销售退货入库上报Xml POST /web/wms/gspSaleReturnIn/queryOmsDocXml */
export async function queryOmsDocXmlUsingPOST(
  body: WMS.ReportSaleReturnInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.GspDocumentVO>('/web/wms/gspSaleReturnIn/queryOmsDocXml', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp上报(批发订单)销售退货入库分页查询 POST /web/wms/gspSaleReturnIn/queryPage */
export async function queryPageUsingPOST(
  body: WMS.ReportSaleReturnWareInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationReportSaleReturnInItemVO_>('/web/wms/gspSaleReturnIn/queryPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp上报(零售订单)销售退货入库分页查询 POST /web/wms/gspSaleReturnIn/queryPageOms */
export async function queryPageOmsUsingPOST(
  body: WMS.ReportSaleReturnWareInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationOmsReportSaleReturnInItemVO_>(
    '/web/wms/gspSaleReturnIn/queryPageOms',
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

/** 修复gsp上报销售退货入库错误数据 POST /web/wms/gspSaleReturnIn/repairItem */
export async function repairItemUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspSaleReturnIn/repairItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售退货入库gsp上报成功 POST /web/wms/gspSaleReturnIn/reportSucceed */
export async function reportSucceedUsingPOST(
  body: WMS.GspDealResultVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspSaleReturnIn/reportSucceed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售退货入库gsp上传处理结果更新 POST /web/wms/gspSaleReturnIn/updateDealResult */
export async function updateDealResultUsingPOST(
  body: WMS.GspDealResultVO[],
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspSaleReturnIn/updateDealResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
