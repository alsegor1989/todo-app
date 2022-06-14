import TasksListItem from "../tasks-list-item/tasks-list-item";

import "./tasks-list.css";

const TasksList = ({ data, onToggleProp, onDeleteItem }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TasksListItem
        key={id}
        {...itemProps}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
        onDelete={() => onDeleteItem(id)}
      />
    );
  });

  return <ul className="tasks-list list-group">{elements}</ul>;
};

export default TasksList;
