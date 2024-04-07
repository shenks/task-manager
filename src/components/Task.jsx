import React from "react";

function Task(props) {
  const formattedDueDate = props.task.dueDate
    ? props.task.dueDate.format("DD-MM-YYYY")
    : "";

  function deleteTask() {
    props.onDelete(props.task.id);
  }

  return (
    <div>
      <div className="task">
        <h1>{props.task.title}</h1>
        <p>{props.task.description}</p>
        <p>Due date: {formattedDueDate}</p>
        <p>priority: {props.task.priority}</p>

        <button onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
