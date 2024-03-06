// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/stockSkuLog/export */
export async function exportUsingPOST(
  body: WMS.StockSkuLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockSkuLog/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询商品库存冻结变动日志 POST /web/wms/stockSkuLog/query */
export async function queryUsingPOST(
  body: WMS.StockSkuLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockSkuLogVO_>('/web/wms/stockSkuLog/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
