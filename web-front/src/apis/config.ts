import axios, { AxiosError } from 'axios';
import { Configuration } from '@/types/typescript-axios/configuration';
import { AuthApi, TodoApi } from '@/types/typescript-axios/api';

const BASE_API_URL = process.env.BASE_API_URL || 'http://localhost';

export interface ResponseType<T = undefined> {
  code: number;
  data?: T;
  message?: string;
}

export interface IErrorResponse {
  code: string;
  config: any;
  message: string;
  request: any;
  response: {
    config: any;
    data: {
      error: string;
      message: string;
      statusCode: string;
    };
    headers: any;
    request: any;
    status: number;
    statusText: string;
  };
}

const getToken = () => (localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null);

const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const config = new Configuration({
  basePath: `${BASE_API_URL}`,
});

const globalAxios = axios.create({
  baseURL: `${BASE_API_URL}`,
  timeout: 1000,
  headers: {
    'Content-type': 'application/json',
  },
});

globalAxios.interceptors.request.use((config) => {
  if (config?.headers) {
    config.headers['Authorization'] = getAuthorizationHeader();
  }
  return config;
});

export const authApi = new AuthApi(config, '', globalAxios);

export const todoApi = new TodoApi(config, '', globalAxios);

export default globalAxios;

export const isAxiosError = (error: any): error is AxiosError => !!error.isAxiosError;
