// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 取消调拨申请单 POST /web/wms/transferStock/cancel/${param0} */
export async function cancelUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/transferStock/cancel/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 审核调拨申请单 POST /web/wms/transferStock/check/${param0} */
export async function checkUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/transferStock/check/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 选择调拨出库商品(没批次) POST /web/wms/transferStock/chooseStockOutWare */
export async function chooseStockOutWareUsingPOST(
  body: WMS.StockProducePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStockProduceVO_>('/web/wms/transferStock/chooseStockOutWare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出调拨入库单 POST /web/wms/transferStock/exportStockInResultDetail */
export async function exportStockOutResultDetailUsingPOST(
  body: WMS.TransferStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/transferStock/exportStockInResultDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出调拨出库单 POST /web/wms/transferStock/exportStockOutResultDetail */
export async function exportStockOutResultDetailUsingPOST_2(
  body: WMS.TransferStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/transferStock/exportStockOutResultDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 调拨申请单详情 GET /web/wms/transferStock/getDetail */
export async function getDetailUsingGET(
  params: {
    // query
    /** 编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.TransferStockVO>('/web/wms/transferStock/getDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 调拨入库单明细 GET /web/wms/transferStock/getStockInResultDetail */
export async function getStockInResultDetailUsingGET(
  params: {
    // query
    /** 编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.TransferStockInResultVO>('/web/wms/transferStock/getStockInResultDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 调拨出库单明细 GET /web/wms/transferStock/getStockOutResultDetail */
export async function getStockOutResultDetailUsingGET(
  params: {
    // query
    /** 编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.TransferStockOutResultVO>('/web/wms/transferStock/getStockOutResultDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取调拨申请单操作日志 GET /web/wms/transferStock/getTraceLog */
export async function getTraceLogUsingGET(
  params: {
    // query
    /** 编号 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.TraceLogVO[]>('/web/wms/transferStock/getTraceLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 调拨入库单 POST /web/wms/transferStock/listStockInResult */
export async function listStockInResultUsingPOST(
  body: WMS.TransferStockInPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationTransferStockInResultVO_>(
    '/web/wms/transferStock/listStockInResult',
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

/** 调拨出库单 POST /web/wms/transferStock/listStockOutResult */
export async function listStockOutResultUsingPOST(
  body: WMS.TransferStockOutPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationTransferStockOutResultVO_>(
    '/web/wms/transferStock/listStockOutResult',
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

/** 调拨申请单列表 POST /web/wms/transferStock/query */
export async function queryUsingPOST(
  body: WMS.TransferStockPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationTransferStockVO_>('/web/wms/transferStock/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 拒收 POST /web/wms/transferStock/reject/${param0} */
export async function rejectUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/transferStock/reject/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 保存调拨申请单, 返回申请单ID POST /web/wms/transferStock/save */
export async function saveUsingPOST(
  body: WMS.TransferStockUpdateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/transferStock/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
