// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询入库单据库存日志 POST /web/wms/stockInboundLog/query */
export async function queryUsingPOST(
  body: WMS.StockInboundLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockInboundLogVO_>('/web/wms/stockInboundLog/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
