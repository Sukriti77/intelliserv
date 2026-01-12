import { useState } from "react";
import Sidebar from "../components/Sidebar";
import CreateUser from "../CreateUser";
import CreateTask from "../pages/CreateTask";
import TaskList from "../pages/TaskList";

function AdminDashboard({ onLogout }) {
  const [view, setView] = useState("users");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="ADMIN" onLogout={onLogout} setView={setView} />

      <div style={{ padding: "20px", width: "100%" }}>
        {view === "users" && <CreateUser />}
        {view === "tasks" && <TaskList />}
        {view === "createTask" && <CreateTask />}
        {view === "assignTask" && <TaskList assignMode />}
      </div>
    </div>
  );
}

export default AdminDashboard;
