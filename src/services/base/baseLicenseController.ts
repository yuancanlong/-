// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据GSP分类id集合获取未停用的证照列表 POST /web/base/base-license/listLicenseByGspCategoryIds */
export async function listLicenseByGspCategoryIdsUsingPOST(
  body: BASE.BaseGspCategoryVO,
  options?: { [key: string]: any },
) {
  return request<BASE.BaseLicenseVO[]>('/web/base/base-license/listLicenseByGspCategoryIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
