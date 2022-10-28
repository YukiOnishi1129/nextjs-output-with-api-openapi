/**
 * TodoDetailTemplate
 *
 * @package components
 */
import { FC } from 'react';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import { InputForm } from '@/components/atoms/InputForm';
import { TextArea } from '@/components/atoms/TextArea';
import { useTodoDetailTemplate } from './useTodoDetailTemplate';
import styles from './styles.module.css';

/**
 * TodoDetailTemplate
 * @returns
 */
export const TodoDetailTemplate: FC = () => {
  const [{ todo }] = useTodoDetailTemplate();

  return (
    <BaseLayout title={'TodoDetail'}>
      {!!todo && (
        <div className={styles.container}>
          <div className={styles.area}>
            <InputForm disabled value={todo.title} placeholder={'Title'} />
          </div>
          <div className={styles.area}>
            <TextArea disabled value={todo.content} placeholder={'Content'} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};
