import { FC } from "react";
import { Todo } from "../../model";
import style from "./style.module.css";

type Props = Todo & {
  removeTodo: (id: Todo["id"]) => void;
  toggleCompleted: (id: Todo["id"]) => void;
};

export const TodoItem: FC<Props> = ({
  id,
  title,
  isCompleted,
  removeTodo,
  toggleCompleted,
}) => {
  const handleClickRemoveButton = () => {
    removeTodo(id);
  };
  const handleChangeCheckbox = () => {
    toggleCompleted(id);
  };
  return (
    <li className={style.item}>
      <input
        className={style.checkbox}
        type="checkbox"
        checked={isCompleted}
        onChange={handleChangeCheckbox}
      />
      {isCompleted ? <s>{title}</s> : title}
      <button className={style.button} onClick={handleClickRemoveButton}>
        x
      </button>
    </li>
  );
};
