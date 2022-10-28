/**
 * BaseLayout
 *
 * @package components
 */
import { FC, ReactNode } from 'react';
import { Navigation } from '../../molecules/Navigation';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  title: string;
};

/**
 *  BaseLayout
 */
export const BaseLayout: FC<Props> = ({ children, title }) => (
  <div>
    <header className={styles.header}>
      <Navigation />
    </header>
    <main className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </main>
  </div>
);
