// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /web/pop/flow/exportMyReview */
export async function exportMyReviewUsingPOST(
  body: POP.MyReviewFlowPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<string>('/web/pop/flow/exportMyReview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取审核进度 POST /web/pop/flow/listFlowIntanceProcess */
export async function listFlowIntanceProcessUsingPOST(
  body: POP.FlowInstanceProcessParamVO,
  options?: { [key: string]: any },
) {
  return request<POP.FlowInstanceProcessVO[]>('/web/pop/flow/listFlowIntanceProcess', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取流程列表 POST /web/pop/flow/listFlowPlan */
export async function listFlowPlanUsingPOST(options?: { [key: string]: any }) {
  return request<POP.FlowPlanVO[]>('/web/pop/flow/listFlowPlan', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取审批中心已审核的-带分页 POST /web/pop/flow/listProcessMyReviewPage */
export async function listProcessMyReviewPageUsingPOST(
  body: POP.MyReviewFlowPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<POP.PaginationProcessMyReviewVO_>('/web/pop/flow/listProcessMyReviewPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取审批中心我提交的-带分页 POST /web/pop/flow/listProcessMySubmitPage */
export async function listProcessMySubmitPageUsingPOST(
  body: POP.MySubmitFlowPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<POP.PaginationProcessMySubmitVO_>('/web/pop/flow/listProcessMySubmitPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取审批中心待办列表-带分页 POST /web/pop/flow/listProcessToDoPage */
export async function listProcessToDoPageUsingPOST(
  body: POP.FlowPageQueryVO,
  options?: { [key: string]: any },
) {
  return request<POP.PaginationProcessTDLVO_>('/web/pop/flow/listProcessToDoPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取首页待办列表 POST /web/pop/flow/listToDoByUserId */
export async function listToDoByUserIdUsingPOST(options?: { [key: string]: any }) {
  return request<POP.BackLogVO[]>('/web/pop/flow/listToDoByUserId', {
    method: 'POST',
    ...(options || {}),
  });
}
