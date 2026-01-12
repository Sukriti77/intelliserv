import React, { useEffect, useState } from "react";
import api from "../api/axios";

function EmployeeDashboard({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/tasks/")
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load tasks", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Dashboard</h2>

      <button onClick={onLogout}>Logout</button>

      <hr />

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>
              <b>Priority:</b> {task.priority}
            </p>
            <p>
              <b>Status:</b> {task.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default EmployeeDashboard;
