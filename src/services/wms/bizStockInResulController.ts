// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 采购入库单商品分页查询(入库调价单选择商品) POST /web/wms/bizStockInResul/in-sku-list */
export async function listByStockInPriceUsingPOST(
  body: WMS.BizStockInResultProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockInResultProduceVO_>('/web/wms/bizStockInResul/in-sku-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购入库单分页查询 POST /web/wms/bizStockInResul/list */
export async function selectListUsingPOST(
  body: WMS.BizStockInResultPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockInResultListVO_>('/web/wms/bizStockInResul/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购入库单商品分页查询(采退服务单选择商品) POST /web/wms/bizStockInResul/sku-list */
export async function selectSkuListUsingPOST(
  body: WMS.BizStockInResultProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockInResultProduceListVO_>(
    '/web/wms/bizStockInResul/sku-list',
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

/** 查询商品（入库税率变更单选择商品） POST /web/wms/bizStockInResul/sku-list-tax-change */
export async function queryPageByTaxChangeUsingPOST(
  body: WMS.BizStockInResultProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationBizStockInResultProduceTaxChangeVO_>(
    '/web/wms/bizStockInResul/sku-list-tax-change',
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
