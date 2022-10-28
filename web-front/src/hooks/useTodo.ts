/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useCallback, useEffect } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { fetchTodoListApi, createTodoApi, updateTodoApi, deleteTodoApi } from '@/apis/todoApi';
import { TodoType } from '@/interfaces/Todo';

/**
 * useTodo
 */
export const useTodo = () => {
  const { isAuth } = useAuthContext();
  /* todo list */
  const [originTodoList, setOriginTodoList] = useState<Array<TodoType>>([]);

  /* actions */

  const fetchTodoList = useCallback(async (): Promise<void> => {
    const res = await fetchTodoListApi();
    setOriginTodoList(res?.data && typeof res.data === 'object' ? res.data : []);
  }, []);

  /**
   * Todo新規登録処理
   * @param {string} title
   * @param {string} content
   */
  const addTodo = useCallback(
    async (title: string, content: string) => {
      const res = await createTodoApi(title, content);
      if (!res?.data || typeof res.data !== 'object') return;
      setOriginTodoList([
        ...originTodoList,
        {
          id: res.data.id,
          title: res.data.title,
          content: res.data.content,
        },
      ]);
    },
    [originTodoList]
  );

  /**
   * Todo更新処理
   * @param {number} id
   * @param {string} title
   * @param {string} content
   */
  const updateTodo = useCallback(
    async (id: number, title: string, content: string) => {
      const res = await updateTodoApi(id, title, content);
      if (!res?.data || typeof res.data !== 'object') return;
      const updatedTodoList = originTodoList.map((todo) => {
        if (res?.data?.id === todo.id) {
          return {
            id: res.data.id,
            title: res.data.title,
            content: res.data.content,
          };
        }

        return todo;
      });
      setOriginTodoList(updatedTodoList);
    },
    [originTodoList]
  );

  /**
   * Todo削除処理
   * @param { number } targetId
   * @param { string }targetTitle
   */
  const deleteTodo = useCallback(
    async (targetId: number) => {
      const res = await deleteTodoApi(targetId);
      if (!res.data || typeof res.data !== 'object') return;

      // todoを削除したtodo listで更新
      setOriginTodoList(originTodoList.filter((todo) => todo.id !== res?.data?.id));
    },
    [originTodoList]
  );

  useEffect(() => {
    if (isAuth) fetchTodoList();
  }, [fetchTodoList, isAuth]);

  return {
    originTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
