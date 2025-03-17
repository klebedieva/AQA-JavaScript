import axios from 'axios';

export default class RestClient {
  #axiosInstance;

  constructor(baseUrl, configOverrides) {
    this.baseUrl = baseUrl;
    this.#axiosInstance = axios.create({
      baseURL: this.baseUrl,
      validateStatus: () => true,
      ...configOverrides
    });
  }

  async sendPost({ url, data, headers = {}, params = {} }) {
    return this.#sendRequest({ url, method: 'POST', data, headers, params });
  }

  async sendGet({ url, headers = {}, params = {} }) {
    return this.#sendRequest({ url, method: 'GET', headers, params });
  }

  async sendPut({ url, data, headers = {}, params = {} }) {
    return this.#sendRequest({ url, method: 'PUT', data, headers, params });
  }

  async sendPatch({ url, data, headers = {}, params = {} }) {
    return this.#sendRequest({ url, method: 'PATCH', data, headers, params });
  }

  async sendDelete({ url, data, headers = {}, params = {} }) {
    return this.#sendRequest({ url, method: 'DELETE', data, headers, params });
  }

  async #sendRequest({ url, method, data, headers, params }) {
    try {
      const response = await this.#axiosInstance.request({
        url,
        method,
        data,
        headers,
        params
      });
      return response;
    } catch (error) {
      console.error('Request failed', error);
      throw error;  
    }
  }
}
