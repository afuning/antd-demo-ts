import request from "./request";
import { string } from "prop-types";
import { RequestOptionsInit } from "umi-request";
/* 整合api接口为
**{
    '/login/get': {
      url: '/login/get',
      method: 'get',
    },
    '/login/post': {
      url: '/login/post',
      method: 'post',
    }
**}
*/
interface iUrl {
  method: string;
  url: string;
  requestType?: string;
}
interface iApiConfig {
  url: string,
  apiOption: {
    method: string,
    requestType?: string,
  }
}
interface iApi {
  [propName: string]: iApiConfig;
}
const buildApis = (baseUrl: string, urlArray: (string | iUrl)[]) => {
  const apiResult: iApi = {};
  urlArray.forEach(url => {
    let method: string = '';
    if (typeof url === 'string') {
      const paths = url.split('/');
      method = paths[paths.length - 1];
    } else {
      method = url.method;
    }
    const urlKey = typeof url === 'string' ? url : url.url;
    const requestType = typeof url === 'string' ? undefined : url.requestType;
    if (urlKey) {
      apiResult[urlKey] = {
        url: urlKey,
        apiOption: {
          method,
          requestType
        }
      };
    }
  });
  return apiResult;
}

const apis = buildApis ('/api', [
  '/login/post',
]);

const backCaller = async (apiUrl: string, data: object| undefined) => {
  const urlObj: iApiConfig = apis[apiUrl];
  if (urlObj) {
    const {url, apiOption} = urlObj;
    const {method} = apiOption;
    let realOption: RequestOptionsInit = {method};
    if (method === 'get') {
      realOption.params = data;
    } else {
      realOption.data = data;
    }
    return request(url, {
      ...realOption
    });
  }
}

export default {apis, backCaller};
