import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

function Input() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  }

  function handleDueDateChange(date) {
    setTask({ ...task, dueDate: date });
  }

  function handlePriorityChange(event) {
    setTask({ ...task, priority: event.target.value });
  }

  return (
    <form>
      <input
        name="title"
        value={task.title}
        placeholder="New Task..."
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={task.description}
        placeholder="Description..."
        onChange={handleChange}
      />
      <div className="date">
        <label htmlFor="dueDate">
          Due date:
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="dueDate"
              name="dueDate"
              value={task.dueDate ? task.dueDate : null}
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
          value={task.priority}
          onChange={handlePriorityChange}
        >
          <FormControlLabel value="high" control={<Radio />} label="High" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="low" control={<Radio />} label="Low" />
        </RadioGroup>
      </div>

      <button>Add</button>
    </form>
  );
}

export default Input;
