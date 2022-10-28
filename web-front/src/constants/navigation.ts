/**
 * navigation
 *
 * @package constants
 */

/**
 * リンク先一覧
 * 遷移先定義の際に使用
 */
export const NAVIGATION_LIST = {
  SIGNIN: '/',
  SIGNUP: '/signup',
  TOP: `/todo`,
  DETAIL: `/todo/detail/:id`,
  CREATE: `/todo/create`,
  EDIT: `/todo/edit/:id`,
};

/**
 * パス一覧
 * 画面遷移時の使用
 */
export const NAVIGATION_PATH = {
  SIGNIN: '/',
  SIGNUP: '/signup',
  TOP: `/todo`,
  DETAIL: `/todo/detail/`,
  CREATE: `/todo/create`,
  EDIT: `/todo/edit/`,
};
