// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 出库运输记录明细 GET /web/wms/logisticsFeedback/detail */
export async function detailUsingGET(
  params: {
    // query
    /** id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.LogisticsDetailVO>('/web/wms/logisticsFeedback/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出库运输记录 POST /web/wms/logisticsFeedback/export */
export async function exportUsingPOST(
  body: WMS.LogisticsPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/logisticsFeedback/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取物流跟踪信息 POST /web/wms/logisticsFeedback/getTrackingInfo */
export async function getTrackingInfoUsingPOST(
  params: {
    // query
    /** 出库通知单号 */
    orderCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.LogisticsTrackingInfoVO>('/web/wms/logisticsFeedback/getTrackingInfo', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 出库运输记录列表 POST /web/wms/logisticsFeedback/list */
export async function listUsingPOST(
  body: WMS.LogisticsPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationLogisticsRecordVO_>('/web/wms/logisticsFeedback/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询包裹明细 POST /web/wms/logisticsFeedback/queryPackageDetail */
export async function queryPackageDetailUsingPOST(
  params: {
    // query
    /** 出库通知单号 */
    orderCode?: string;
    /** 包裹号 */
    packageCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.PackageDetailVO>('/web/wms/logisticsFeedback/queryPackageDetail', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询装箱明细 POST /web/wms/logisticsFeedback/queryPackageList */
export async function queryPackageListUsingPOST(
  body: WMS.PackageInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationPackageInfoVO_>('/web/wms/logisticsFeedback/queryPackageList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
