import _ from 'lodash';
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

/**
 * 빈값 제거
 * @param data
 * @returns {Dictionary<unknown>}
 */
function removeEmptyField(data) {
  if (data instanceof FormData) return data;
  return _.pickBy(data, (value, key) => {
    if (_.isNumber(value)) return true;
    if (_.isBoolean(value)) return true;
    if (_.startsWith(key, '$$##') && _.endsWith(key, '##$$')) return false;
    if (_.isUndefined(value)) return false;
    return true;
  });
}

const createInstance = () => {
  const source = axios.CancelToken.source();

  const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 1000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
    withCredentials: true,
    cancelToken: source.token,
  });

  instance.get = (url, params, config) => {
    if (!_.isEmpty(params)) {
      const query = new URLSearchParams(removeEmptyField(params));
      url = `${url}?${query.toString()}`;
    }
    console.log('url', url);
    return instance({
      method: 'get',
      url,
      ...config,
    });
  };

  instance.delete = (url, params, config) => {
    if (!_.isEmpty(params)) {
      const query = new URLSearchParams(removeEmptyField(params));
      url = `${url}?${query.toString()}`;
    }
    return instance({
      method: 'delete',
      url,
      ...config,
    });
  };

  instance.file = (url, data, config = {}) => {
    const { headers, ...otherConfig } = config;
    return instance({
      method: 'get',
      url,
      data,
      ...otherConfig,
      headers: { ...headers, 'Cache-Control': 'no-cache' },
      responseType: 'blob',
    });
  };

  instance.cancel = () => source.cancel('Operation canceled by the user.');

  return instance;
};

function axiosInstance(store) {
  const instance = createInstance();

  // instance.interceptors.request.use(
  //   async (config) => {
  //     if (store.authStore.isAuthenticated) {
  //       config.headers.Authorization = `Bearer ${store.authStore.tokenDto.accessToken}`;
  //     }
  //
  //     config.data = removeEmptyField(config.data);
  //
  //     if (store) store.markLoading(true);
  //     return config;
  //   },
  //   (err) => {
  //     if (store) store.markLoading(false);
  //     return Promise.reject(err);
  //   },
  // );
  //
  // instance.interceptors.response.use(
  //   (res) => {
  //     if (store) store.markLoading(false);
  //     // response : { code, data, filters, result }
  //     if (res?.data instanceof Blob) {
  //       return res;
  //     }
  //     return res?.data || res;
  //   },
  //   (err) => {
  //     if (store) store.markLoading(false);
  //     // status 가 401 일 경우 refreshAuthLogic 호출
  //     return Promise.reject(err);
  //   },
  // );
  // createAuthRefreshInterceptor(instance, (failedRequest) => refreshAuthLogic(store, failedRequest), { statusCodes: [401, 403] });
  return instance;
}

export default axiosInstance;
