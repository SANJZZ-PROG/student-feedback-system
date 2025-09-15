import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student"
  });
  const [message, setMessage] = useState("");

  // Validation function
  const validate = () => {
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage("Invalid email format");
      return false;
    }
    if (form.password.length < 8) {
      setMessage("Password must be at least 8 characters");
      return false;
    }
    if (!form.password.match(/[0-9]/)) {
      setMessage("Password must contain at least 1 number");
      return false;
    }
    if (!form.password.match(/[!@#$%^&*]/)) {
      setMessage("Password must contain at least 1 special character");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!validate()) return;
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", form);
      if (res.status === 200) {
        setMessage("Signup successful! Please login.");
        setForm({
          name: "",
          email: "",
          password: "",
          role: "student",
        });
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <br />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
    </div>
  );
}