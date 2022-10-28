/**
 * TodoContext
 *
 * @package contexts
 */
import { FC, ReactNode, useContext, createContext } from 'react';
import { TodoType } from '@/interfaces/Todo';
import { useTodo } from '@/hooks/useTodo';

type Props = {
  children: ReactNode;
};

interface ContextInterface {
  originTodoList: Array<TodoType>;
  addTodo: (title: string, content: string) => Promise<void>;
  updateTodo: (id: number, title: string, content: string) => Promise<void>;
  deleteTodo: (targetId: number) => Promise<void>;
}

/**
 * TodoContext
 */
const TodoContext = createContext({} as ContextInterface);

/**
 * TodoProvider
 * @param children
 * @constructor
 */
export const TodoProvider: FC<Props> = ({ children }) => {
  // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーにあてがう
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/**
 * useTodoContext
 */
export const useTodoContext = () => useContext(TodoContext);
