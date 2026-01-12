function Sidebar({ role, onLogout, setView }) {
  return (
    <div className="sidebar">
      <h3>IntelliServe</h3>

      {role === "ADMIN" && (
        <>
          <p onClick={() => setView("users")}>Create User</p>
          <p onClick={() => setView("tasks")}>View Tasks</p>
          <p onClick={() => setView("createTask")}>Create Task</p>
          <p onClick={() => setView("assignTask")}>Assign Task</p>
        </>
      )}

      {role === "EMPLOYEE" && (
        <p onClick={() => setView("myTasks")}>My Tasks</p>
      )}

      <p style={{ color: "red" }} onClick={onLogout}>
        Logout
      </p>
    </div>
  );
}

export default Sidebar;
