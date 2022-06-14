import { useState } from "react";

import "./tasks-add-form.css";

const TasksAddForm = (props) => {
  const [newTask, setNewTask] = useState(() => "");

  const onValueChange = (e) => {
    setNewTask(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (newTask.length < 1) {
      alert("At least 1 symbol required.");
      return;
    }
    props.onTaskAdd(newTask);
    setNewTask("");
  };

  return (
    <div className="task-add-form">
      <form className="add-form d-flex" onSubmit={onSubmit} autoComplete="off">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="What needs to be done?"
          name="task"
          value={newTask}
          onChange={onValueChange}
        />
      </form>
    </div>
  );
};

export default TasksAddForm;
