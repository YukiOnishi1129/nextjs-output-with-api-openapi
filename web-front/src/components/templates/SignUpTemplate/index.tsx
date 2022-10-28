/**
 * SignUpTemplate
 *
 * @package components
 */
import { FC } from 'react';
import Link from 'next/link';
import { NAVIGATION_LIST } from '@/constants/navigation';
import { useAuthContext } from '@/contexts/AuthContext';
import { InputForm } from '@/components/atoms/InputForm';
import { CommonButton } from '@/components/atoms/CommonButton';
import { useSignUpTemplate } from './useSignUpTemplate';
import styles from './styles.module.css';

/**
 * SignUpTemplate
 * @returns
 */
export const SignUpTemplate: FC = () => {
  const { singIn } = useAuthContext();
  const [
    { name, email, password, passwordConfirm },
    { handleChangeName, handleChangeEmail, handleChangePassword, handleChangePasswordConfirm, handleSignUp },
  ] = useSignUpTemplate({ singIn });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SignUp</h1>
      <form className={styles.form} onSubmit={handleSignUp}>
        <div className={styles.area}>
          <InputForm type="text" value={name} placeholder="name" onChange={handleChangeName} />
        </div>
        <div className={styles.area}>
          <InputForm type="email" value={email} placeholder="email" onChange={handleChangeEmail} />
        </div>
        <div className={styles.area}>
          <InputForm type="password" value={password} placeholder="password" onChange={handleChangePassword} />
        </div>
        <div className={styles.area}>
          <InputForm
            type="password"
            value={passwordConfirm}
            placeholder="password confirm"
            onChange={handleChangePasswordConfirm}
          />
        </div>
        <div className={styles.area}>
          <CommonButton type="submit" title="signup" />
        </div>
        <div className={styles.link}>
          <Link href={NAVIGATION_LIST.SIGNIN}>&lt;&lt; to signin page</Link>
        </div>
      </form>
    </div>
  );
};
