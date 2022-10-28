import axios, { AxiosError } from 'axios';

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

const globalAxios = axios.create({
  baseURL: `${BASE_API_URL}/api`,
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

export default globalAxios;

export const isAxiosError = (error: any): error is AxiosError => !!error.isAxiosError;
