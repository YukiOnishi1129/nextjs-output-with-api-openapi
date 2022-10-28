/**
 * TextArea
 *
 * @package components
 */
import { FC } from 'react';
import styles from './styles.module.css';

type Props = JSX.IntrinsicElements['textarea']

/**
 * TextArea
 * @param disabled
 * @param value
 * @param placeholder
 * @param onChange
 * @constructor
 */
export const TextArea: FC<Props> =
  ({
     disabled,
     value,
     placeholder,
     onChange
   }) => (
    <textarea
      disabled={disabled}
      className={styles.text}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
