import React from "react";
import Task from "./Task";

export default function List({ tasksList, setTasksList }) {
  const toCheck = (id) => {
    setTasksList((prev) => {
      const copy = [...prev];
      const taskToEdit = copy.find((task) => task.id === id);
      taskToEdit.status = "Done";
      return copy;
    });
  };

  const toEdit = (id) => {
    setTasksList((prev) => {
      const copy = [...prev];
      const taskToEdit = copy.find((task) => task.id === id);
      taskToEdit.isEditing = true;
      return copy;
    });

  };

  const toDelete = (id) => {
    setTasksList((prev) => {
      const newArr = prev.filter((task) => task.id !== id);
      return newArr;
    });
  };

  return (
    <div className="taskListContainer">
      {tasksList.map((task) => (
        <Task
          task={task}

          check={() => toCheck(task.id)}
          edit={()=>toEdit(task.id)}
          eliminate={() => toDelete(task.id)}
          setter = {setTasksList}
        />
      ))}
    </div>
  );
}
