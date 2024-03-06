// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 审核复查单审核信息 POST /web/wms/reviewOrder/check/${param0} */
export async function checkUsingPOST(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/web/wms/reviewOrder/check/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取业务质量复查单 GET /web/wms/reviewOrder/get/${param0} */
export async function getUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WMS.ReviewOrderInfoVO>(`/web/wms/reviewOrder/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询业务质量复查单 POST /web/wms/reviewOrder/query */
export async function queryUsingPOST(
  body: WMS.ReviewOrderPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<WMS.PaginationReviewOrderVO_>('/web/wms/reviewOrder/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改复查单审核信息 POST /web/wms/reviewOrder/updateCheckInfo */
export async function updateCheckInfoUsingPOST(
  body: WMS.ReviewOrderCheckInfoUpdateVO,
  options?: { [key: string]: any },
) {
  return request<boolean>('/web/wms/reviewOrder/updateCheckInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
