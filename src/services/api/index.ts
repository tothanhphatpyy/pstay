import axios from "axios";

const UNAUTHORIZED = 'UNAUTHORIZED';
const REQ_TIMEOUT = 25 * 1000;
export const __DEV__ = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const BASE_URL_APP = import.meta.env.VITE_BASE_URL_APP;

// console.log('🚀 BASE_URL_APP:', BASE_URL_APP);
export const instance = axios.create({
  baseURL: BASE_URL_APP,
  timeout: REQ_TIMEOUT,
});

const initHeader = { isAuth: true };

export const getHeader = async (customHeaders) => {
  const header = customHeaders || {};
  const initCustomHeader = customHeaders ? customHeaders : initHeader;

  if (initCustomHeader?.isAuth) {
    delete header.Authorization;
  } else {
    const authToken = customHeaders?.token; // token lay tu asyncStorage
    header.Authorization = `Bearer ${authToken}`;
  }
  return { ...header };
};

instance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);

let isRefreshing = false;
const refreshSubscribers = [];
function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}

function onRefreshed(token) {
  refreshSubscribers.map((cb) => cb(token));
}

const errorHandler = (error) => {
  const resError = error.response;
  const originalRequest = error.config;

  if (resError?.data?.code === UNAUTHORIZED) {
    if (!isRefreshing) {
      isRefreshing = true;
      // xử lý refresh token
    }
    const retryOrigReq = new Promise((resolve, reject) => {
      subscribeTokenRefresh(async (token) => {
        originalRequest.headers['Authorization'] = 'Bearer ' + token;
        resolve(instance.request(originalRequest));
      });
    });
    return retryOrigReq;
  }

  if (__DEV__) {
    /* console.log(`Response API:`, resError?.data); */
  }

  return Promise.reject({ ...resError?.data });
};

const successHandler = async (response) => {
  if (__DEV__) {
    /* console.log(`Response API: ${response.config.url}`, response.data); */
  }
  const data = response.data;
  if (!data || data.status === 'INVALID_TOKEN' || data.code === UNAUTHORIZED) {
    return;
  }
  return data;
};

async function request(url, customHeaders, params, responseType) {
  const headers = await getHeader(customHeaders);
  return instance.get(url, { params, headers, responseType });
}

async function post(url, data, customHeaders) {
  const headers = await getHeader(customHeaders);
  return instance.post(url, { ...data }, { headers });
}

async function postForm(url, data, customHeaders) {
  const headers = await getHeader(customHeaders);
  return instance.post(url, data, { headers });
}

async function put(url, customHeaders, data) {
  const headers = await getHeader(customHeaders);
  return instance.put(url, { ...data }, { headers });
}

async function remove(url, customHeaders, data) {
  const headers = await getHeader(customHeaders);
  return instance.delete(url, { data: { ...data }, headers: { ...headers } });
}

const ApiUtils = { request, post, put, postForm, remove };
export { ApiUtils };