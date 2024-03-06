// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 采购合同列表查询 POST /web/po/pur/contract/detail/list/${param0} */
export async function listUsingPOST(
  params: {
    // path
    /** contractId */
    contractId: string;
  },
  options?: { [key: string]: any },
) {
  const { contractId: param0, ...queryParams } = params;
  return request<PO.PurContractDetailVO[]>(`/web/po/pur/contract/detail/list/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 采购合同分页查询 POST /web/po/pur/contract/detail/query */
export async function queryUsingPOST(
  body: PO.PurContractDetailPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<PO.PaginationPurContractDetailVO_>('/web/po/pur/contract/detail/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
