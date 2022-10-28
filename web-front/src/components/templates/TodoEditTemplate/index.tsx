/**
 * TodoEditTemplate
 *
 * @package components
 */
import { FC } from 'react';
import { useTodoContext } from '@/contexts/TodoContext';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import { InputForm } from '@/components/atoms/InputForm/';
import { TextArea } from '@/components/atoms/TextArea/';
import { CommonButton } from '@/components/atoms/CommonButton/';
import { useTodoEditTemplate } from './useTodoEditTemplate';
import styles from './styles.module.css';

/**
 * TodoEditTemplate
 * @constructor
 */
export const TodoEditTemplate: FC = () => {
  const { originTodoList, updateTodo } = useTodoContext();

  const [{ todo, inputTitle, inputContent }, { handleChangeTitle, handleChangeContent, handleUpdateTodo }] =
    useTodoEditTemplate({ originTodoList, updateTodo });

  return (
    <BaseLayout title={'TodoEdit'}>
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div className={styles.area}>
            <InputForm value={inputTitle} placeholder={'Title'} onChange={handleChangeTitle} />
          </div>
          <div className={styles.area}>
            <TextArea value={inputContent} placeholder={'Content'} onChange={handleChangeContent} />
          </div>
          <div className={styles.area}>
            <CommonButton type="submit" title="Edit Todo" />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};
