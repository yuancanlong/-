// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 销售出库单明细 GET /web/wms/saleOut/detail */
export async function detailUsingGET(
  params: {
    // query
    /** id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.SaleOutDetailVO>('/web/wms/saleOut/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取销售出库单列表 POST /web/wms/saleOut/list */
export async function listUsingPOST(
  body: WMS.SaleOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationSaleOutVO_>('/web/wms/saleOut/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 打印销售出库单 POST /web/wms/saleOut/print */
export async function printUsingPOST(
  params: {
    // query
    /** 出库单id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/saleOut/print', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取销售单子包裹列表 POST /web/wms/saleOut/queryPackageList */
export async function querySubPackageListUsingPOST(
  body: WMS.PackageInfoPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationPackageInfoVO_>('/web/wms/saleOut/queryPackageList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询包裹运单物流跟踪信息 GET /web/wms/saleOut/queryPackageTrackingExpress */
export async function queryPackageTrackingExpressUsingGET(
  params: {
    // query
    /** 运单号 */
    mailNo?: string;
    /** 包裹号 */
    packageCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.PackageTrackingExpressVO[]>('/web/wms/saleOut/queryPackageTrackingExpress', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 销售出入库详情 POST /web/wms/saleOut/querySaleStockResult */
export async function querySaleStockResultUsingPOST(
  body: WMS.SaleStockResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationSaleStockResultVO_>('/web/wms/saleOut/querySaleStockResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询批发订单物流跟踪信息 GET /web/wms/saleOut/queryWssOrderTrackingExpress */
export async function queryWssOrderTrackingExpressUsingGET(
  params: {
    // query
    /** 出库通知单号 */
    orderCode?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.PackageTrackingExpressVO[]>('/web/wms/saleOut/queryWssOrderTrackingExpress', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出商品 POST /web/wms/saleOut/ware-export */
export async function wareExportUsingPOST(
  body: WMS.SaleOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/saleOut/ware-export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
