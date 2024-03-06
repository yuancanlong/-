// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出消息 POST /web/pop/notice/export */
export async function exportUsingPOST(
  body: POP.NoticePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/pop/notice/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取公告列表 POST /web/pop/notice/list */
export async function listUsingPOST(body: POP.NoticePageQueryVO, options?: { [key: string]: any }) {
  return request<POP.PaginationNoticeVO_>('/web/pop/notice/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户未读消息总数 POST /web/pop/notice/listNotReadByUserId */
export async function listNotReadByUserIdUsingPOST(options?: { [key: string]: any }) {
  return request<number>('/web/pop/notice/listNotReadByUserId', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 阅读消息 POST /web/pop/notice/read */
export async function readUsingPOST(body: POP.NoticePageQueryVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/notice/read', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
