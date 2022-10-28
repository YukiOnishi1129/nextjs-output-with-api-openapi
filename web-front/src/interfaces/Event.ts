/**
 * Event
 *
 * @package interface
 */
import { MouseEvent, ChangeEvent, KeyboardEvent, FocusEvent, FormEvent } from 'react';

/**
 * EventType
 */
export interface EventType {
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onkeypress: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSubmitButton: (event: FormEvent<HTMLButtonElement>) => void;
  onClickDiv: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
