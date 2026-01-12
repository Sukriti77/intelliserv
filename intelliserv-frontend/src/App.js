import React, { useState } from "react";
import Login from "./Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

function App() {
  const [role, setRole] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    setRole(null);
  };

  // 🔹 If not logged in, show Login
  if (!role) {
    return <Login onLogin={setRole} />;
  }

  // 🔹 Route based on role
  if (role === "ADMIN") {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  if (role === "EMPLOYEE") {
    return <EmployeeDashboard onLogout={handleLogout} />;
  }

  // 🔹 Fallback (safety)
  return <Login onLogin={setRole} />;
}

export default App;
