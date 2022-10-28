/**
 * useSignUpTemplate
 *
 * @package components
 */
import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { signUpApi } from '@/apis/authApi';
import { NAVIGATION_PATH } from '@/constants/navigation';
import { UserType } from '@/interfaces/User';
import { EventType } from '@/interfaces/Event';

type Params = {
  singIn: (user: UserType) => Promise<void>;
};

type StatesType = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type ActionsType = {
  handleChangeName: EventType['onChangeInput'];
  handleChangeEmail: EventType['onChangeInput'];
  handleChangePassword: EventType['onChangeInput'];
  handleChangePasswordConfirm: EventType['onChangeInput'];
  handleSignUp: EventType['onSubmit'];
};

/**
 * useSignUpTemplate
 * @param param0
 * @returns
 */
export const useSignUpTemplate = ({ singIn }: Params) => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  /**
   * name更新処理
   */
  const handleChangeName: EventType['onChangeInput'] = useCallback((event) => setName(event.target.value), []);

  /**
   * email更新処理
   */
  const handleChangeEmail: EventType['onChangeInput'] = useCallback((event) => setEmail(event.target.value), []);

  /**
   * password更新処理
   */
  const handleChangePassword: EventType['onChangeInput'] = useCallback((event) => setPassword(event.target.value), []);

  /**
   * passwordConfirm更新処理
   */
  const handleChangePasswordConfirm: EventType['onChangeInput'] = useCallback(
    (event) => setPasswordConfirm(event.target.value),
    []
  );

  /**
   * 会員登録処理
   */
  const handleSignUp: EventType['onSubmit'] = useCallback(
    async (event) => {
      event.preventDefault();
      if (password !== passwordConfirm) return;
      if (name === '' || email === '' || password === '') return;

      const res = await signUpApi(name, email, password);
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
    [name, email, password, passwordConfirm, router, singIn]
  );

  const states: StatesType = {
    name,
    email,
    password,
    passwordConfirm,
  };

  const actions: ActionsType = {
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleChangePasswordConfirm,
    handleSignUp,
  };

  return [states, actions] as const;
};
