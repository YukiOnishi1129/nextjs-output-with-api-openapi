/**
 * useSignInTemplate
 *
 * @package components
 */
import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { signInApi } from '@/apis/authApi';
import { NAVIGATION_PATH } from '@/constants/navigation';
import { UserType } from '@/interfaces/User';
import { EventType } from '@/interfaces/Event';

type Params = {
  singIn: (user: UserType) => Promise<void>;
};

type StatesType = {
  email: string;
  password: string;
};

type ActionsType = {
  handleChangeEmail: EventType['onChangeInput'];
  handleChangePassword: EventType['onChangeInput'];
  handleLogin: EventType['onSubmit'];
};

/**
 * useSignInTemplate
 * @param param0
 * @returns
 */
export const useSignInTemplate = ({ singIn }: Params) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  /**
   * email更新処理
   */
  const handleChangeEmail: EventType['onChangeInput'] = useCallback((event) => setEmail(event.target.value), []);

  /**
   * password更新処理
   */
  const handleChangePassword: EventType['onChangeInput'] = useCallback((event) => setPassword(event.target.value), []);

  /**
   * ログイン処理
   */
  const handleLogin: EventType['onSubmit'] = useCallback(
    async (event) => {
      event.preventDefault();
      const res = await signInApi(email, password);
      if (res?.code === 401) {
        console.log(res.message);
        return;
      }
      if (res?.data?.user) {
        singIn(res.data.user);
        localStorage.setItem('access_token', res.data.accessToken);
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [email, password, singIn, router]
  );

  const states: StatesType = {
    email,
    password,
  };

  const actions: ActionsType = {
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
  };

  return [states, actions] as const;
};
