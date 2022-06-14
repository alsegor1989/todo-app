import "./tasks-list-item.css";

const TasksListItem = (props) => {
  const { task, completed, onToggleProp, onDelete } = props;

  let classNames = "list-group-item d-flex justify-content-between";

  return (
    <li className={classNames}>
      <span className="wrapper">
        <span className="circle" onClick={onToggleProp} data-toggle="completed">
          {completed ? <span className="checked"></span> : null}
        </span>
        <h3 className={completed ? `completed` : ""}>{task}</h3>
      </span>
      <span className="remove" onClick={onDelete}>
        &times;
      </span>
    </li>
  );
};

export default TasksListItem;
