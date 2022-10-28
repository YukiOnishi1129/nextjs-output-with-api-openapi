/**
 * CommonButton
 *
 * @package components
 */
import { FC } from 'react';
import styles from './styles.module.css';

type Props = JSX.IntrinsicElements['button']

/**
 * CommonButton
 * @param type
 * @param title
 * @param onClick
 * @constructor
 */
export const CommonButton: FC<Props> =
  ({
     type,
     title,
     onClick
   }) => (
    <button className={styles.button} type={type} onClick={onClick}>
      {title}
    </button>
  );
