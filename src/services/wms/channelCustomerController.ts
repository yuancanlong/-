// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 客户集列表分页 POST /web/wms/channelCustomer/customer-list-page */
export async function customerListPageUsingPOST(
  body: WMS.ChannelCustomerQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationChannelCustomerInfoVO_>(
    '/web/wms/channelCustomer/customer-list-page',
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

/** 客户集列表 POST /web/wms/channelCustomer/list */
export async function customerListUsingPOST(
  body: WMS.ChannelCustomerQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.ChannelCustomerInfoVO[]>('/web/wms/channelCustomer/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
