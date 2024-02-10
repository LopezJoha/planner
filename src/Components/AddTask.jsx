import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTask({ setTasksList }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setTask("");
    setDescription("");
  };

  const addingToList = () => {
    setTasksList((prev) => {
      const newTask = {
        id: uuidv4(),
        task: task,
        description: description,
        status: "Active",
        isEditing : false
      };
      return [...prev, newTask];
    });
    resetForm();
  };

  return (
    <div className="addTask">
      <h3>Add a Task</h3>
      <form>
        <label>New Task:</label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <label>Description:</label>
        <input className="inputFocus"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
      <button className="sendButton" onClick={addingToList}>
        Add
      </button>
    </div>
  );
}