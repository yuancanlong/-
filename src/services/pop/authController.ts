// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 忘记密码 POST /web/pop/auth/forgetPassword */
export async function forgetPasswordUsingPOST(
  body: POP.ResetPassParam,
  options?: { [key: string]: any },
) {
  return request<POP.CommonResult>('/web/pop/auth/forgetPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取加密密钥 GET /web/pop/auth/getEncryptKey */
export async function getEncryptKeyUsingGET(options?: { [key: string]: any }) {
  return request<string>('/web/pop/auth/getEncryptKey', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取图形验证码 GET /web/pop/auth/getImageCode */
export async function getImageCodeUsingGET(options?: { [key: string]: any }) {
  return request<POP.ImageCodeVO>('/web/pop/auth/getImageCode', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取登录验证码 GET /web/pop/auth/getLoginCode */
export async function getLoginCodeUsingGET(
  params: {
    // query
    /** 登录用户名 */
    loginName?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/web/pop/auth/getLoginCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取短信验证码 POST /web/pop/auth/getSmsCode */
export async function getSmsCodeUsingPOST(
  body: POP.GetSmsCodeParam,
  options?: { [key: string]: any },
) {
  return request<POP.SmsCodeVO>('/web/pop/auth/getSmsCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登录 POST /web/pop/auth/login */
export async function loginUsingPOST(body: POP.LoginParamVO, options?: { [key: string]: any }) {
  return request<boolean>('/web/pop/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
