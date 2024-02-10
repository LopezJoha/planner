import React, { useState } from "react";
import "../App.css";
const checked = require("../Assets/checked.png");
const edit = require("../Assets/edit2.png");
const toDelete = require("../Assets/toDelete.png");

export default function Task(props) {
  const [displayTask, setDisplayTask] = useState(props.task.task);
  const [displayDesc, setDisplayDesc] = useState(props.task.description);

  const closeEdit = () => {
    props.setter((prev) => {
      const copy = [...prev];
      const taskToEdit = copy.find((task) => task.id === props.task.id);
      if(taskToEdit){
        taskToEdit.isEditing = false;
        taskToEdit.task = displayTask;
        taskToEdit.description = displayDesc;
      }
      return copy;
    });
  };

  return (
    <div className="taskContainer">
      <div className="taskDescripCont">
        <p>Task's Name: </p>
        {props.task.isEditing ? (
          <input
            type="text"
            name="task"
            value={displayTask}
            onChange={(e) => setDisplayTask(e.target.value)}
          />
        ) : (
          <h3>{props.task.task}</h3>
        )}
        <p>Task's Description: </p>
        {props.task.isEditing ? (
          <input
            type="text"
            name="description"
            value={displayDesc}
            onChange={(e) => setDisplayDesc(e.target.value)}
          />
        ) : (
          <h3>{props.task.description}</h3>
        )}

        <p>Task's Status: </p>
        <h3>{props.task.status}</h3>

        <div className="btnContainer">
          {props.task.isEditing ? (
            <button onClick={closeEdit} className="done-button">
              Done
            </button>
          ) : (
            <>
              <img
                className="btnAction"
                src={checked}
                alt="checked"
                onClick={() => props.check()}
              />
              <img
                className="btnAction"
                src={edit}
                alt="edit"
                onClick={() => props.edit()}
              />
              <img
                className="btnAction"
                src={toDelete}
                alt="delete"
                onClick={() => props.eliminate()}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
