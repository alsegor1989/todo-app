import TasksListItem from "../tasks-list-item/tasks-list-item";

import "./tasks-list.css";

const TasksList = ({ data, onDelete, onToggleProp, onChangeProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TasksListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
        onChangeProp={(e) =>
          onChangeProp(
            id,
            e.currentTarget.getAttribute("data-change"),
            +e.currentTarget.value.slice(1)
          )
        }
      />
    );
  });

  return <ul className="tasks-list list-group">{elements}</ul>;
};

export default TasksList;
