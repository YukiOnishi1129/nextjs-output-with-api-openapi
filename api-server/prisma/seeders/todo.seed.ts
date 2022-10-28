import { Todo } from '@prisma/client';

const todoData: Array<Omit<Todo, 'createdAt' | 'updatedAt'>> = [
  {
    id: 1,
    title: 'Todo1',
    content: 'Todo1 content',
    userId: 1,
  },
  {
    id: 2,
    title: 'Todo2',
    content: 'Todo2 content',
    userId: 1,
  },
  {
    id: 3,
    title: 'Todo3',
    content: 'Todo3 content',
    userId: 1,
  },
];

export const dbTodoSeed = async (prisma: any) => {
  const todos = [];
  todoData.forEach((todo) => {
    const createTodos = prisma.todo.create({
      data: todo,
    });
    todos.push(createTodos);
  });
  return await prisma.$transaction(todos);
};
