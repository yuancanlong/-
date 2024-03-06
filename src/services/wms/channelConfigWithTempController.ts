// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 保存或更新客户集 POST /web/wms/channelConfigTemp/save-or-update */
export async function saveOrUpdateUsingPOST(
  body: WMS.ChannelConfigWithTempSaveVO,
  options?: { [key: string]: any },
) {
  return request<WMS.SaveChannelConfigWithTempResultVO>(
    '/web/wms/channelConfigTemp/save-or-update',
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
