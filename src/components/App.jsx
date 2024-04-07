import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Input from "./Input";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks((prevTasks) => {
      return [...prevTasks, { ...newTask, id: prevTasks.length + 1 }];
    });
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.id !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Input onAdd={addTask} />
      {tasks.map((taskItem) => {
        return (
          <Task
            key={taskItem.id}
            id={taskItem.id}
            task={taskItem}
            onDelete={deleteTask}
          />
        );
      })}
    </div>
  );
}

export default App;
