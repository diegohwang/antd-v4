import { Constants } from '@/utils/constant';
import request from 'umi-request';

export interface LoginParamsType {
  username: string;
  password: string;
  mobile: string;
  captcha: string;
}

// 登录链路4：异步调用mock/user.ts中mock的后台接口
export async function fakeAccountLogin(params: LoginParamsType) {
  return request( Constants.baseUrl + '/api/login/account', {
    method: 'POST',
    data: params,
  });
}

// export async function fakeAccountLogin(params: LoginParamsType) {
//   return request('/api/login/account', {
//     method: 'POST',
//     data: params,
//   });
// }

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
