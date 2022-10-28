/**
 * InputForm
 *
 * @package components
 */
import { FC } from 'react';
import styles from './styles.module.css';

type Props = JSX.IntrinsicElements['input'];

/**
 * InputForm
 * @param disabled
 * @param value
 * @param placeholder
 * @param onChange
 * @param onKeyDown
 */
export const InputForm: FC<Props> = ({ disabled = false, value, type = 'text', placeholder, onChange, onKeyDown }) => (
  <input
    disabled={disabled}
    className={styles.input}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);
