import { VFC } from 'react';
import { TodoType } from './types/todo';

export const Todo: VFC<Omit<TodoType, 'id'>> = (
  props
  // props: Pick<TodoType, 'userId' | 'title' | 'completed'>
  // props: Omit<TodoType, 'id'>
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? '[完了]' : '[未完]';
  return <p>{`${completeMark} ${title}（ユーザー:${userId}）`}</p>;
};
