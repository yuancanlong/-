// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加质量管控 POST /web/wms/gspQualityControl/add */
export async function addUsingPOST(
  body: WMS.GspQualityControlVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspQualityControl/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消 POST /web/wms/gspQualityControl/cancel/${param0} */
export async function cancelUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/gspQualityControl/cancel/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 审核 POST /web/wms/gspQualityControl/check/${param0} */
export async function checkUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/gspQualityControl/check/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 检查质量管控，返回被管控数据 POST /web/wms/gspQualityControl/checkAndGetQuality */
export async function checkAndGetQualityUsingPOST(
  body: WMS.GspQualityControlCheckVO,
  options?: { [key: string]: any },
) {
  return request<WMS.GspQualityControlResultVO>('/web/wms/gspQualityControl/checkAndGetQuality', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 关闭 POST /web/wms/gspQualityControl/close/${param0} */
export async function closeUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/gspQualityControl/close/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 生产厂家导入模板下载 POST /web/wms/gspQualityControl/download/manufacturerTemplate */
export async function manufacturerTemplateUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/wms/gspQualityControl/download/manufacturerTemplate', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 供应商导入模板下载 POST /web/wms/gspQualityControl/download/supplierTemplate */
export async function supplierTemplateUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/wms/gspQualityControl/download/supplierTemplate', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 商品导入模板下载 POST /web/wms/gspQualityControl/download/wareTemplate */
export async function wareTemplateUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/web/wms/gspQualityControl/download/wareTemplate', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 质量公告详情 GET /web/wms/gspQualityControl/getDetail */
export async function getDetailUsingGET(
  params: {
    // query
    /** id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.GspQualityControlVO>('/web/wms/gspQualityControl/getDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导入生产厂家列表 POST /web/wms/gspQualityControl/importManufacturer */
export async function importManufacturerUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.ImportResultVOGspQualityControlManufacturerVO_>(
    '/web/wms/gspQualityControl/importManufacturer',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 导入供应商列表 POST /web/wms/gspQualityControl/importSupplier */
export async function importSupplierUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.ImportResultVOGspQualityControlSupplierVO_>(
    '/web/wms/gspQualityControl/importSupplier',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 导入商品列表 POST /web/wms/gspQualityControl/importWare */
export async function importWareUsingPOST(
  params: {
    // query
    /** 文件 */
    file?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WMS.ImportResultVOGspQualityControlWareVO_>(
    '/web/wms/gspQualityControl/importWare',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取操作日志 GET /web/wms/gspQualityControl/listTraceLog/${param0} */
export async function listTraceLogUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.TraceLogVO[]>(`/web/wms/gspQualityControl/listTraceLog/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 质量公告列表 POST /web/wms/gspQualityControl/query */
export async function queryUsingPOST(
  body: WMS.GspQualityControlPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationGspQualityControlVO_>('/web/wms/gspQualityControl/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新质量管控 POST /web/wms/gspQualityControl/update */
export async function updateUsingPOST(
  body: WMS.GspQualityControlVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspQualityControl/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
