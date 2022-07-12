import type { FC } from "react";
import { Todo } from "../model";
import { TodoItem } from "./TodoItem";

type Props = {
  todoList: Todo[];
  removeTodo: (id: Todo["id"]) => void;
  toggleCompleted: (id: Todo["id"]) => void;
};

export const TodoList: FC<Props> = ({
  todoList,
  removeTodo,
  toggleCompleted,
}) => (
  <ul>
    {todoList.map(({ id, title, isCompleted }) => (
      <TodoItem
        key={id}
        id={id}
        title={title}
        isCompleted={isCompleted}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
    ))}
  </ul>
);
