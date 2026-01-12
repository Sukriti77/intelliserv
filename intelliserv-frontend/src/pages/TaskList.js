import React, { useEffect, useState } from "react";
import api from "../api/axios";

function TaskList({ assignMode = false }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = () => {
    api
      .get("/tasks/")
      .then((res) => setTasks(res.data))
      .catch(() => alert("Failed to load tasks"));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const assignTask = async (taskId) => {
    try {
      await api.post(`/tasks/assign/${taskId}`);
      alert("Task assigned successfully");
      loadTasks(); // refresh list
    } catch (err) {
      alert("Failed to assign task");
    }
  };

  return (
    <div>
      <h3>{assignMode ? "Assign Tasks" : "All Tasks"}</h3>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "12px",
              borderRadius: "6px",
              background: "#fff",
            }}
          >
            <h4>{task.title}</h4>
            <p>{task.description}</p>

            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>

            {/* ✅ Assignment Info */}
            <p>
              Assigned To:{" "}
              <strong>
                {task.assigned_to ? task.assigned_to : "Unassigned"}
              </strong>
            </p>

            {/* ✅ Visual Badge */}
            <p
              style={{
                color: task.assigned_to ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {task.assigned_to ? "Assigned" : "Unassigned"}
            </p>

            {/* ✅ Admin Assign Button */}
            {assignMode && !task.assigned_to && (
              <button onClick={() => assignTask(task.id)}>
                Assign Task
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
