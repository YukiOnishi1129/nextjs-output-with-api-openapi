/**
 * useTodoDetailTemplate
 *
 * @package components
 */
import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchTodoDetailApi } from '@/apis/todoApi';
import { TodoEntity } from '@/types/typescript-axios/api';

type StatesType = {
  todo: TodoEntity | undefined;
};

/**
 * useTodoDetailTemplate
 */
export const useTodoDetailTemplate = () => {
  const router = useRouter();
  const [todo, setTodo] = useState<TodoEntity | undefined>(undefined);

  /**
   * fetchTodoDetail
   */
  const fetchTodoDetail = useCallback(async () => {
    const targetId = router?.query?.id;
    if (!!targetId && typeof targetId === 'string' && !Number.isNaN(Number(targetId))) {
      const res = await fetchTodoDetailApi(Number(targetId));
      setTodo(res?.data?.todo && typeof res.data.todo === 'object' ? res.data.todo : undefined);
    }
  }, [router?.query?.id]);

  useEffect(() => {
    fetchTodoDetail();
  }, [fetchTodoDetail]);

  const states: StatesType = {
    todo,
  };

  return [states] as const;
};
