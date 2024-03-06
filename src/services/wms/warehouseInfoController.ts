// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询仓库列表 GET /web/wms/warehouse/info/query */
export async function queryUsingGET(options?: { [key: string]: any }) {
  return request<WMS.WarehouseInfoVO[]>('/web/wms/warehouse/info/query', {
    method: 'GET',
    ...(options || {}),
  });
}
