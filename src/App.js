import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import List from "./Components/List";

function App() {
  const [tasksList, setTasksList] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <AddTask setTasksList={setTasksList} />
        {tasksList.length ? (
          <List tasksList={tasksList} setTasksList={setTasksList} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
