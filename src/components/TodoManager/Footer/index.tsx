import { FC } from "react";
import style from "./style.module.css";

export const Footer: FC<{ count: number }> = ({ count }) => (
  <footer className={style.footer}>
    <span>Todoアイテム数: {count}</span>
  </footer>
);
