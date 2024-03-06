// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增渠道(预约)业务配置主表 POST /web/wms/channelConfig */
export async function saveUsingPOST(
  body: WMS.ChannelConfigCreateVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/wms/channelConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 调整客户集 POST /web/wms/channelConfig/adjust-customer-set */
export async function adjustCustomerSetUsingPOST(
  body: WMS.ChannelCustomerSaveVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/channelConfig/adjust-customer-set', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询渠道(预约)业务配置主表 POST /web/wms/channelConfig/query */
export async function queryUsingPOST(
  body: WMS.ChannelConfigPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationChannelConfigInfoVO_>('/web/wms/channelConfig/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 失效、生效开关 POST /web/wms/channelConfig/start-switch */
export async function startSwitchUsingPOST(
  body: WMS.ChannelConfigStartSwitchVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/channelConfig/start-switch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取渠道(预约)业务配置主表 GET /web/wms/channelConfig/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.ChannelConfigVO>(`/web/wms/channelConfig/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 编辑渠道(预约)业务配置主表 PUT /web/wms/channelConfig/${param0} */
export async function editUsingPUT(
  params: {
    // path
    /** id */
    id: string;
  },
  body: WMS.ChannelConfigCreateVO,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string>(`/web/wms/channelConfig/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
