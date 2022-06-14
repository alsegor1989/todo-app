import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import TasksInfo from "../tasks-info/tasks-info";
import TasksAddForm from "../tasks-add-form/tasks-add-form";
import TasksList from "../tasks-list/tasks-list";
import TasksFilter from "../tasks-filter/tasks-filter";

import "./app.css";

const App = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [filteredTodos, setFilteredTodos] = useState(() => todos);
  const [activeFilter, setActiveFilter] = useState(() => "All");

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredTodos(todos);
    } else if (activeFilter === "Active") {
      setFilteredTodos(todos.filter((t) => t.completed === false));
    } else if (activeFilter === "Completed") {
      setFilteredTodos(todos.filter((t) => t.completed === true));
    }
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [activeFilter, todos]);

  const onTaskAdd = (task) => {
    const newItem = {
      task,
      completed: false,
      id: uuidv4(),
    };

    setTodos([...todos, newItem]);
  };

  const onToggleProp = (id, prop) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      })
    );
  };

  const onDeleteItem = (id) => {
    setTodos((todos) => {
      return todos.filter((item) => item.id !== id);
    });
  };

  const onClearCompleted = () => {
    setTodos((todos) => {
      return todos.filter((item) => !item.completed);
    });
  };

  const tasksLeft = todos.filter((item) => !item.completed).length;

  return (
    <div className="app">
      <TasksInfo itemsNum={tasksLeft} />
      <TasksAddForm onTaskAdd={onTaskAdd} />
      <TasksList
        data={filteredTodos}
        onToggleProp={onToggleProp}
        onDeleteItem={onDeleteItem}
      />
      <TasksFilter
        filter={activeFilter}
        onFilterSelect={setActiveFilter}
        onClearCompleted={onClearCompleted}
      />
    </div>
  );
};

export default App;
