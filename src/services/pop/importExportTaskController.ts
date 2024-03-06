// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取任务列表 POST /web/pop/importExportTask/list */
export async function listUsingPOST(
  body: POP.ImportExportTaskPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<POP.PaginationImportExportTaskVO_>('/web/pop/importExportTask/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
