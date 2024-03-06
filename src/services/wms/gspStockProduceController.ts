// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询未上报库存记录上报次数 GET /web/wms/gspStockProduce/countNoReportGroupByStockDate */
export async function countNoReportGroupByStockDateUsingGET(options?: { [key: string]: any }) {
  return request<number>('/web/wms/gspStockProduce/countNoReportGroupByStockDate', {
    method: 'GET',
    ...(options || {}),
  });
}

/** GSP批号库存记录上报列表 POST /web/wms/gspStockProduce/query */
export async function queryUsingPOST(
  body: WMS.GspStockProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspStockProduceVO_>('/web/wms/gspStockProduce/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp批号库存上报xml POST /web/wms/gspStockProduce/queryDocXml */
export async function queryDocXmlUsingPOST(
  body: WMS.GspStockProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.GspDocumentVO>('/web/wms/gspStockProduce/queryDocXml', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修复gsp上报库存记录错误数据 POST /web/wms/gspStockProduce/repairErrorData */
export async function repairErrorDataUsingPOST(body: string[], options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspStockProduce/repairErrorData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp批号库存记录上报成功 POST /web/wms/gspStockProduce/reportSucceed */
export async function reportSucceedUsingPOST(
  body: WMS.GspDealResultVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspStockProduce/reportSucceed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp批号库存记录上传处理结果更新 POST /web/wms/gspStockProduce/updateDealResult */
export async function updateDealResultUsingPOST(
  body: WMS.GspDealResultVO[],
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspStockProduce/updateDealResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
