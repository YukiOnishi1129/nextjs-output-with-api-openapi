/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useCallback, useEffect } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { fetchTodoListApi, createTodoApi, updateTodoApi, deleteTodoApi } from '@/apis/todoApi';
import { TodoEntity } from '@/types/typescript-axios/api';

/**
 * useTodo
 */
export const useTodo = () => {
  const { isAuth } = useAuthContext();
  /* todo list */
  const [originTodoList, setOriginTodoList] = useState<Array<TodoEntity>>([]);

  /* actions */

  const fetchTodoList = useCallback(async (): Promise<void> => {
    const res = await fetchTodoListApi();
    setOriginTodoList(res?.data?.todos && typeof res.data.todos === 'object' ? res.data.todos : []);
  }, []);

  /**
   * Todo新規登録処理
   * @param {string} title
   * @param {string} content
   */
  const addTodo = useCallback(
    async (title: string, content: string) => {
      const res = await createTodoApi(title, content);
      const todo = res?.data?.todo;
      if (!todo || typeof todo !== 'object') return;

      setOriginTodoList([
        ...originTodoList,
        {
          id: todo.id,
          title: todo.title,
          content: todo.content,
          userId: todo.userId,
          createdAt: todo.createdAt,
          updatedAt: todo.updatedAt,
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
      const updatedTodo = res?.data?.todo;
      if (!updatedTodo || typeof updatedTodo !== 'object') return;
      const updatedTodoList = originTodoList.map((todo) => {
        if (updatedTodo.id === todo.id) {
          return {
            id: updatedTodo.id,
            title: updatedTodo.title,
            content: updatedTodo.content,
            userId: updatedTodo.userId,
            createdAt: updatedTodo.createdAt,
            updatedAt: updatedTodo.updatedAt,
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
      const deletedTodo = res.data?.todo;
      if (!deletedTodo || typeof deletedTodo !== 'object') return;

      // todoを削除したtodo listで更新
      setOriginTodoList(originTodoList.filter((todo) => todo.id !== deletedTodo.id));
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
