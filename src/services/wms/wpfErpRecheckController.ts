// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出-采购验收记录 POST /web/wms/wpfErpRecheck/export-recheck */
export async function exportByRecheckUsingPOST(
  body: WMS.WpfErpRecheckPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/wpfErpRecheck/export-recheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出-退回验收记录 POST /web/wms/wpfErpRecheck/export-return */
export async function exportByReturnUsingPOST(
  body: WMS.WpfErpRecheckPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/wpfErpRecheck/export-return', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 不合格验收入库分页列表 POST /web/wms/wpfErpRecheck/failQuery */
export async function failQueryUsingPOST(
  body: WMS.WpfErpRecheckPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfPORecheckVO_>('/web/wms/wpfErpRecheck/failQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 验收入库详情 GET /web/wms/wpfErpRecheck/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.WpfPORecheckVO>(`/web/wms/wpfErpRecheck/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 采购验收入库分页列表 POST /web/wms/wpfErpRecheck/poQuery */
export async function poQueryUsingPOST(
  body: WMS.WpfErpRecheckPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfPORecheckVO_>('/web/wms/wpfErpRecheck/poQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购验收记录分页列表 POST /web/wms/wpfErpRecheck/recheckQuery */
export async function recheckQueryUsingPOST(
  body: WMS.WpfErpRecheckPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfErpRecheckVO_>('/web/wms/wpfErpRecheck/recheckQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退回验收记录分页列表 POST /web/wms/wpfErpRecheck/return/query */
export async function queryUsingPOST(
  body: WMS.WpfErpReturnPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfErpReturnVO_>('/web/wms/wpfErpRecheck/return/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销退入库验收分页列表 POST /web/wms/wpfErpRecheck/saleReturnQuery */
export async function saleReturnQueryUsingPOST(
  body: WMS.WpfErpRecheckPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationWpfPORecheckVO_>('/web/wms/wpfErpRecheck/saleReturnQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
