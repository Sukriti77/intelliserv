import React, { useState } from "react";
import api from "./api/axios";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("EMPLOYEE");

  const handleCreateUser = async () => {
    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      alert("User created successfully");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to create user");
    }
  };

  return (
    <div>
      <h3>Create User</h3>

      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="EMPLOYEE">EMPLOYEE</option>
        <option value="ADMIN">ADMIN</option>
      </select>

      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
}

export default CreateUser;
