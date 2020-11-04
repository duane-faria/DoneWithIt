import { crate, create } from 'apisauce';
import cache from '../utility/cache';
import { getToken } from '../auth/storage';

const apiClient = create({
  // baseURL: 'https://10.0.2.2:9000/api',
  baseURL: 'http://192.168.1.9:9000/api',
});

apiClient.addAsyncRequestTransform(async (request) => {
  const auth = await getToken();
  if (!auth) return;
  request.headers['x-auth-token'] = auth;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

export default apiClient;
