/**
 * useTodoList
 *
 * @package components
 */
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { NAVIGATION_PATH } from '@/constants/navigation';

type ActionType = {
  handleMoveDetailPage: (id: number) => void
  handleMoveEditPage: (id: number) => void
}

/**
 * useTodoList
 */
export const useTodoList = () => {
  const router = useRouter();

  /**
   * 詳細ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveDetailPage = useCallback(
    (id: number) => router.push(`${NAVIGATION_PATH.DETAIL}${id}`),
    [router]
  );

  /**
   * 編集ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveEditPage = useCallback(
    (id: number) => router.push(`${NAVIGATION_PATH.EDIT}${id}`),
    [router]
  );

  const actions: ActionType = {
    handleMoveDetailPage,
    handleMoveEditPage
  };

  return [actions] as const;
};