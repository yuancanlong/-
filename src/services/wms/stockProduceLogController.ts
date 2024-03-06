// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/wms/stockProduceLog/export */
export async function exportUsingPOST(
  body: WMS.StockProduceLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/stockProduceLog/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取批号库存变动日志 GET /web/wms/stockProduceLog/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.StockProduceLogVO>(`/web/wms/stockProduceLog/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询批号库存变动日志 POST /web/wms/stockProduceLog/query */
export async function queryUsingPOST(
  body: WMS.StockProduceLogPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockProduceLogVO_>('/web/wms/stockProduceLog/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
