import { FC, FormEvent, useRef } from "react";
import style from "./style.module.css";

export const InputForm: FC<{
  onSubmit: (label: string) => void;
}> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;
    onSubmit(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What need to be done?"
        ref={inputRef}
      />
    </form>
  );
};
