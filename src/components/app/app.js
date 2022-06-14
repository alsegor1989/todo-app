import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TasksInfo from "../tasks-info/tasks-info";
import TasksAddForm from "../tasks-add-form/tasks-add-form";

import "./app.css";

const App = () => {
  const [todos, setTodos] = useState(() => []);
  const [filteredTodos, setFilteredTodos] = useState(() => todos);
  const [activeFilter, setActiveFilter] = useState(() => "All");

  const onTaskAdd = (task) => {
    const newItem = {
      task,
      completed: false,
      id: uuidv4(),
    };

    setTodos([...todos, newItem]);
  };

  const completed = todos.filter((item) => item.completed).length;

  return (
    <div className="app">
      <TasksInfo itemsNum={completed} />
      <TasksAddForm onTaskAdd={onTaskAdd} />
    </div>
  );
};

export default App;
