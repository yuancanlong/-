// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增gsp采购员审计登记 POST /web/wms/gspStaffAuditRegister/createPO */
export async function createPOUsingPOST(
  body: WMS.StaffAuditRegisterVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspStaffAuditRegister/createPO', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增gsp销售员审计登记 POST /web/wms/gspStaffAuditRegister/createSale */
export async function createSaleUsingPOST(
  body: WMS.StaffAuditRegisterVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspStaffAuditRegister/createSale', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除gsp采购员/销售员登记详情 POST /web/wms/gspStaffAuditRegister/delete */
export async function deleteUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<boolean>('/web/wms/gspStaffAuditRegister/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp采购员登记导出 POST /web/wms/gspStaffAuditRegister/exportPO */
export async function exportPOUsingPOST(
  body: WMS.StaffAuditRegisterPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspStaffAuditRegister/exportPO', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp销售员登记导出 POST /web/wms/gspStaffAuditRegister/exportSale */
export async function exportSaleUsingPOST(
  body: WMS.StaffAuditRegisterPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/gspStaffAuditRegister/exportSale', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp销售员/采购员登记详情 GET /web/wms/gspStaffAuditRegister/getInfo/${param0} */
export async function getInfoUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.StaffAuditRegisterVO>(`/web/wms/gspStaffAuditRegister/getInfo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 采购人员审验登记列表 POST /web/wms/gspStaffAuditRegister/queryPO */
export async function queryPOUsingPOST(
  body: WMS.StaffAuditRegisterPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStaffAuditRegisterVO_>('/web/wms/gspStaffAuditRegister/queryPO', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 销售人员审验登记列表 POST /web/wms/gspStaffAuditRegister/querySale */
export async function querySaleUsingPOST(
  body: WMS.StaffAuditRegisterPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationStaffAuditRegisterVO_>('/web/wms/gspStaffAuditRegister/querySale', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp采购员登记修改 POST /web/wms/gspStaffAuditRegister/updatePO */
export async function updatePOUsingPOST(
  body: WMS.StaffAuditRegisterVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspStaffAuditRegister/updatePO', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** gsp销售员登记修改 POST /web/wms/gspStaffAuditRegister/updateSale */
export async function updateSaleUsingPOST(
  body: WMS.StaffAuditRegisterVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/gspStaffAuditRegister/updateSale', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
