import React, { useState } from "react";
import api from "../api/axios";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");

  const submitTask = async () => {
    await api.post("/tasks/", { title, description, priority });
    alert("Task created");
  };

  return (
    <div>
      <h2>Create Task</h2>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
      <select onChange={e => setPriority(e.target.value)}>
        <option>LOW</option>
        <option>MEDIUM</option>
        <option>HIGH</option>
      </select>
      <button onClick={submitTask}>Create</button>
    </div>
  );
}

export default CreateTask;
