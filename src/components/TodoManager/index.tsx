import { FC } from "react";
import { useTodoManager } from "./hooks";
import style from "./style.module.css";
import { InputForm } from "./InputForm";
import { TodoList } from "./TodoList";
import { Footer } from "./Footer";

export const TodoManager: FC = () => {
  const { todoList, addTodo, removeTodo, toggleCompleted } = useTodoManager();

  return (
    <section className={style.widget}>
      <InputForm onSubmit={addTodo} />
      <TodoList
        todoList={todoList}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
      <Footer count={todoList.length} />
    </section>
  );
};
