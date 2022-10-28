/**
 * TodoList
 *
 * @package components
 */
import { FC } from 'react';
import {
  faTrashAlt,
  faFile,
  faPenToSquare
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TodoType } from '@/interfaces/Todo';
import { useTodoList } from './useTodoList';
import styles from './styles.module.css';

type Props = {
  todoList: Array<TodoType>
  handleDeleteTodo: (targetId: number, targetTitle: string) => void
}

/**
 * TodoList
 * @param {*} props
 * @returns
 */
export const TodoList: FC<Props> =
  ({ todoList, handleDeleteTodo }) => {
    const [{ handleMoveDetailPage, handleMoveEditPage }] = useTodoList();

    return (
      <ul className={styles.list}>
        {todoList.map((todo) => (
          <li key={todo.id} className={styles.todo}>
            <span className={styles.task}>{todo.title}</span>
            <div className={styles.area}>
              <div className={styles.far}>
                {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
                <FontAwesomeIcon
                  icon={faFile}
                  size='lg'
                  onClick={() => handleMoveDetailPage(todo.id)}
                />
              </div>
              <div className={styles.far}>
                {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size='lg'
                  onClick={() => handleMoveEditPage(todo.id)}
                />
              </div>
              <div className={styles.far}>
                {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  size='lg'
                  onClick={() => handleDeleteTodo(todo.id, todo.title)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };
