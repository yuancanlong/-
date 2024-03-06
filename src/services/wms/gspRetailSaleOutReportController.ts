// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 零售出库记录分页查询 POST /web/wms/gspRetailSaleOut/query */
export async function queryUsingPOST(
  body: WMS.GspReportRetailSaleOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspReportRetailSaleOutVO_>('/web/wms/gspRetailSaleOut/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 零售出库上报Xml POST /web/wms/gspRetailSaleOut/queryDocXml */
export async function queryDocXmlUsingPOST(
  body: WMS.GspReportRetailSaleOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.GspDocumentVO>('/web/wms/gspRetailSaleOut/queryDocXml', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 零售出库记录分页查询（明细级） POST /web/wms/gspRetailSaleOut/queryWithDetail */
export async function queryWithDetailUsingPOST(
  body: WMS.GspReportRetailSaleOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspReportRetailSaleOutRecordVO_>(
    '/web/wms/gspRetailSaleOut/queryWithDetail',
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

/** 修复gsp上报零售出库错误数据 POST /web/wms/gspRetailSaleOut/repairItem */
export async function repairItemUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspRetailSaleOut/repairItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 零售出库gsp上报成功 POST /web/wms/gspRetailSaleOut/reportSucceed */
export async function reportSucceedUsingPOST(
  body: WMS.GspDealResultVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspRetailSaleOut/reportSucceed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 零售出库gsp上传处理结果更新 POST /web/wms/gspRetailSaleOut/updateDealResult */
export async function updateDealResultUsingPOST(
  body: WMS.GspDealResultVO[],
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspRetailSaleOut/updateDealResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
