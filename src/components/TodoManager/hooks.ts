import { useRef, useState } from "react";
import { Todo } from "./model";

type HooksType = () => {
  todoList: Todo[];
  addTodo: (title: Todo["title"]) => void;
  removeTodo: (id: Todo["id"]) => void;
  toggleCompleted: (id: Todo["id"]) => void;
};

export const useTodoManager: HooksType = () => {
  const idRef = useRef(0);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (title: Todo["title"]) => {
    const newTask: Todo = {
      id: ++idRef.current,
      title,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newTask]);
  };

  const removeTodo = (id: Todo["id"]) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id: Todo["id"]) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        return {
          ...todo,
          isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted,
        };
      })
    );
  };
  return {
    todoList,
    addTodo,
    removeTodo,
    toggleCompleted,
  };
};
