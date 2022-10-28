/**
 * SignInTemplate
 *
 * @package components
 */
import { FC } from 'react';
import Link from 'next/link';
import { NAVIGATION_LIST } from '@/constants/navigation';
import { useAuthContext } from '@/contexts/AuthContext';
import { InputForm } from '@/components/atoms/InputForm';
import { CommonButton } from '@/components/atoms/CommonButton';
import { useSignInTemplate } from './useSignInTemplate';
import styles from './styles.module.css';

/**
 * SignInTemplate
 * @returns
 */
export const SignInTemplate: FC = () => {
  const { singIn } = useAuthContext();
  const [{ email, password }, { handleChangeEmail, handleChangePassword, handleLogin }] = useSignInTemplate({ singIn });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.area}>
          <InputForm type="email" value={email} placeholder="email" onChange={handleChangeEmail} />
        </div>
        <div className={styles.area}>
          <InputForm type="password" value={password} placeholder="password" onChange={handleChangePassword} />
        </div>
        <div className={styles.area}>
          <CommonButton type="submit" title="login" />
        </div>
        <div className={styles.link}>
          <Link href={NAVIGATION_LIST.SIGNUP}>&lt;&lt; to signup page</Link>
        </div>
      </form>
    </div>
  );
};
