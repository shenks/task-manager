import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

function Input() {
  return (
    <form>
      <input name="title" placeholder="New Task..." />
      <textarea name="description" placeholder="Description..." />
      <div class="date">
        <label htmlFor="dueDate">
          Due date:
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker id="dueDate" />
          </LocalizationProvider>
        </label>
      </div>
      <div class="radio">
        <label htmlFor="priority">Priority: </label>
        <RadioGroup
          row
          // aria-label="gender"
          // name="row-radio-buttons-group"
          // value={value}
          // onChange={handleChange}
        >
          <FormControlLabel value="high" control={<Radio />} label="High" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="low" control={<Radio />} label="Low" />
          {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        /> */}
        </RadioGroup>
      </div>

      <button>Add</button>
    </form>
  );
}

export default Input;
