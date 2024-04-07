import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Input from "./Input";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  }

  return (
    <div className="App">
      <Header />
      <Input onAdd={addTask} />
      {tasks.map((taskItem, index) => {
        return <Task key={index} task={taskItem} />;
      })}
    </div>
  );
}

export default App;
