/**
 * TodoContext
 *
 * @package contexts
 */
import { FC, ReactNode, useContext, createContext } from 'react';
import { UserEntity } from '@/types/typescript-axios/api';
import { useAuth } from '@/hooks/useAuth';

type Props = {
  children: ReactNode;
};

interface ContextInterface {
  user: UserEntity | undefined;
  isAuth: boolean;
  singIn: (user: UserEntity) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext({} as ContextInterface);

/**
 * AuthProvider
 * @param children
 * @returns
 */
export const AuthProvider: FC<Props> = ({ children }) => {
  const { user, isAuth, singIn, signOut } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        singIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
