import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Task(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...props.task });

  function handleEditing() {
    setIsEditing(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedTask({ ...editedTask, [name]: value });
  }

  function handleDueDateChange(date) {
    setEditedTask({ ...editedTask, dueDate: date });
  }

  function handlePriorityChange(event) {
    setEditedTask({ ...editedTask, priority: event.target.value });
  }

  function handleSave() {
    props.onSave(editedTask);
    setIsEditing(false);
  }

  const formattedDueDate = editedTask.dueDate
    ? editedTask.dueDate.format("DD-MM-YYYY")
    : "";

  function deleteTask() {
    props.onDelete(props.task.id);
  }

  return (
    <div>
      <div className="task">
        {isEditing ? (
          <form>
            <input
              name="title"
              value={editedTask.title}
              placeholder="New Task..."
              onChange={handleChange}
            />
            <textarea
              name="description"
              value={editedTask.description}
              placeholder="Description..."
              onChange={handleChange}
            />
            <div className="date">
              <label htmlFor="dueDate">
                Due date:
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="dueDate"
                    value={editedTask.dueDate ? editedTask.dueDate : null}
                    format="DD-MM-YYYY"
                    onChange={handleDueDateChange}
                  />
                </LocalizationProvider>
              </label>
            </div>
            <div className="radio">
              <label htmlFor="priority">Priority: </label>
              <RadioGroup
                row
                aria-label="priority"
                name="priority"
                value={editedTask.priority}
                onChange={handlePriorityChange}
              >
                <FormControlLabel
                  value="high"
                  control={<Radio />}
                  label="High"
                />
                <FormControlLabel
                  value="medium"
                  control={<Radio />}
                  label="Medium"
                />
                <FormControlLabel value="low" control={<Radio />} label="Low" />
              </RadioGroup>
            </div>
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </form>
        ) : (
          <div>
            <h1>{editedTask.title}</h1>
            <p>{editedTask.description}</p>
            <p>Due date: {formattedDueDate}</p>
            <p>Priority: {editedTask.priority}</p>
            <button onClick={handleEditing}>Edit</button>
            <button onClick={deleteTask}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Task;
