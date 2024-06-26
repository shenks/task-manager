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

  function updateTask(updatedTask) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === updatedTask.id) {
          return { ...task, ...updatedTask };
        }
        return task;
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
            onSave={updateTask}
          />
        );
      })}
    </div>
  );
}

export default App;
