import { crate, create } from 'apisauce';
import cache from '../utility/cache';
import authStorage from '../auth/storage';
import settings from '../config/settings';
const apiClient = create({
  // baseURL: 'https://10.0.2.2:9000/api',
  baseURL: settings.apiUrl,
});
apiClient.addAsyncRequestTransform(async (request) => {
  const auth = await authStorage.getToken();
  if (!auth) return;
  request.headers['authorization'] = `Bearer ${auth}`;
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
