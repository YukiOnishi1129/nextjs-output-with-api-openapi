/**
 * TodoListTemplate
 *
 * @package components
 */
import { BaseLayout } from '@/components/organisms/BaseLayout';
import { InputForm } from '@/components/atoms/InputForm';
import { TodoList } from '@/components/organisms/TodoList';
import { useTodoContext } from '@/contexts/TodoContext';
import { useTodoTemplate } from './useTodoTemplate';
import styles from './styles.module.css';

/**
 * TodoListTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoListTemplate = () => {
  // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
  const { originTodoList, deleteTodo } = useTodoContext();

  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword, handleDeleteTodo }] = useTodoTemplate({
    originTodoList,
    deleteTodo,
  });

  return (
    <BaseLayout title={'TodoList'}>
      <div className={styles.container}>
        {/* Todo検索フォームエリア */}
        <div className={styles.area}>
          <InputForm value={searchKeyword} placeholder={'Search Keyword'} onChange={handleChangeSearchKeyword} />
        </div>
        {/* Todoリスト一覧表示 */}
        <div className={styles.area}>
          {showTodoList?.length > 0 && <TodoList todoList={showTodoList} handleDeleteTodo={handleDeleteTodo} />}
        </div>
      </div>
    </BaseLayout>
  );
};
