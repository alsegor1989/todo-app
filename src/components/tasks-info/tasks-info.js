import "./tasks-info.css";

const TasksInfo = ({ itemsNum }) => {
  return (
    <div className="tasks-info">
      <h1>todos</h1>
      <h2>{itemsNum} items left</h2>
    </div>
  );
};

export default TasksInfo;
