/**
 * Navigation
 *
 * @package components
 */
import { FC } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { NavigationLink } from '@/components/atoms/NavigationLink';
import { NAVIGATION_PATH } from '@/constants/navigation';
import { useNavigation } from './useNavigation';
import styles from './styles.module.css';

/**
 * Navigation
 * @constructor
 */
export const Navigation: FC = () => {
  const { signOut } = useAuthContext();
  const { handleLogout } = useNavigation({ signOut });

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Todo List</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <NavigationLink title={'Top'} linkPath={NAVIGATION_PATH.TOP} />
          <NavigationLink title={'Create'} linkPath={NAVIGATION_PATH.CREATE} />
          <li className={styles.li}>
            <button className={styles.button} onClick={handleLogout}>
              SignOut
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
