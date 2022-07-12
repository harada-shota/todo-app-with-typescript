import { FC } from "react";
import { TodoManager } from "./components/TodoManager";
import "./App.css";

const App: FC = () => (
  <div className="layout">
    <div className="layout__center">
      <TodoManager />
    </div>
  </div>
);

export default App;
