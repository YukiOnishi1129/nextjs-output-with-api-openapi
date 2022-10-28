import { authApi, isAxiosError, ResponseType, IErrorResponse } from '@/apis/config';
import { AuthResponseDto } from '@/types/typescript-axios/api';

/**
 * ログインAPI
 * @param email
 * @param password
 * @returns
 */
export const signInApi = async (email: string, password: string) => {
  try {
    const { data } = await authApi.authControllerSignIn({
      email,
      password,
    });
    const res: ResponseType<AuthResponseDto> = {
      code: 200,
      data,
    };
    return res;
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    };
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse;
      res.code = axiosError.response.status;
      res.message = axiosError.response.data.message;
    }
    return res;
  }
};

/**
 * 会員登録API
 * @param name
 * @param email
 * @param password
 * @returns
 */
export const signUpApi = async (name: string, email: string, password: string) => {
  try {
    const { data } = await authApi.authControllerSignUp({
      name,
      email,
      password,
    });
    const res: ResponseType<AuthResponseDto> = {
      code: 200,
      data,
    };
    return res;
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    };
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse;
      res.code = axiosError.response.status;
      res.message = axiosError.response.data.message;
    }
    return res;
  }
};

/**
 * 認証チェックAPI
 * @returns
 */
export const authenticationApi = async () => {
  try {
    const { data } = await authApi.authControllerAuthentication();
    const res: ResponseType<AuthResponseDto> = {
      code: 200,
      data,
    };
    return res;
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    };
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse;
      res.code = axiosError.response.status;
      res.message = axiosError.response.data.message;
    }
    return res;
  }
};
