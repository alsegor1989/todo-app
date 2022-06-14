import "./tasks-filter.css";

const TasksFilter = (props) => {
  const buttonsData = [
    { name: "All", label: "All" },
    { name: "Active", label: "Active" },
    { name: "Completed", label: "Completed" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="filter-panel">
      <div className="btn-group">{buttons}</div>
      <button
        className="btn btn-outline-light"
        onClick={props.onClearCompleted}
      >
        {"Clear completed"}
      </button>
    </div>
  );
};

export default TasksFilter;
