import "./tasks-list-item.css";

const TasksListItem = (props) => {
  const { task, completed, onToggleProp, onDelete } = props;

  let classNames = "list-group-item d-flex justify-content-between";

  return (
    <li className={classNames}>
      <span className="wrapper">
        <span
          className="circle"
          onClick={onToggleProp}
          data-toggle="completed"
          data-testid="btn-check"
        >
          {completed ? (
            <span className="checked" data-testid="checked-elem"></span>
          ) : null}
        </span>
        <h3 className={completed ? `completed` : ""}>{task}</h3>
      </span>
      <span className="remove" onClick={onDelete} data-testid="btn-remove">
        &times;
      </span>
    </li>
  );
};

export default TasksListItem;
