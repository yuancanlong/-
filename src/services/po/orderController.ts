// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 修改采购订单 PUT /web/po/order/ */
export async function updateOrderUsingPUT(body: PO.OrderVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/order/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建采购订单 POST /web/po/order/ */
export async function createOrderUsingPOST(body: PO.OrderVO, options?: { [key: string]: any }) {
  return request<string>('/web/po/order/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 作废采购订单 POST /web/po/order/cancel/${param0} */
export async function cancelByOrderIdUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/order/cancel/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 审核采购订单 POST /web/po/order/check */
export async function checkUsingPOST(body: PO.BasicCheckVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/po/order/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 关闭订单 POST /web/po/order/close/${param0} */
export async function closeUsingPOST(
  params: {
    // query
    /** reason */
    reason: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/order/close/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 采购订单模板下载 POST /web/po/order/download/template */
export async function templateUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/po/order/download/template', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 采购订单商品导入 POST /web/po/order/import */
export async function importSkuUsingPOST(
  params: {
    // query
    /** 合同id */
    contractId?: string;
    /** 文件 */
    file?: string;
    /** 项目id */
    projectInfoId?: string;
    /** 供应商id（必传） */
    supplierId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<PO.ImportExcelResultVOOrderImportVO_>('/web/po/order/import', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单分页查询 POST /web/po/order/list */
export async function queryPageUsingPOST(
  body: PO.OrderVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationOrderListVO_>('/web/po/order/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取商品列表 POST /web/po/order/prepay-list */
export async function listForPrepayUsingPOST(
  body: PO.OrderVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationOrderListVO_>('/web/po/order/prepay-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购订单撤审 POST /web/po/order/revoke/${param0} */
export async function revokeUsingPOST(
  params: {
    // query
    /** remark */
    remark?: string;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/po/order/revoke/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 订单分页查询 POST /web/po/order/select-list */
export async function selectListUsingPOST(
  body: PO.OrderVOPageQuery,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationOrderListVO_>('/web/po/order/select-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取商品列表 POST /web/po/order/sku-list */
export async function skuListUsingPOST(
  body: PO.OrderDetailsPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationOrderDetailsListVO_>('/web/po/order/sku-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取采购订单详情 GET /web/po/order/${param0} */
export async function getUsingGET(
  params: {
    // query
    /** isSelect */
    isSelect?: boolean;
    /** isTag */
    isTag?: boolean;
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.OrderInfoVO>(`/web/po/order/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取商品列表 POST /web/po/order/${param0}/sku-list */
export async function skuListUsingPOST_2(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<PO.OrderDetailsListVO[]>(`/web/po/order/${param0}/sku-list`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
