import React, { useState } from "react";
import axios from "axios";

export default function FeedbackForm() {
  const [form, setForm] = useState({
    course: "",
    rating: "",
    message: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      // Get token from localStorage
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/api/feedback/", form, {
        headers: { Authorization: 'Bearer ${token}' },
      });
      if (res.status === 200) {
        setMsg("Feedback submitted!");
        setForm({ course: "", rating: "", message: "" });
      }
    } catch (error) {
      setMsg(error.response?.data?.message || "Submission failed.");
    }
  };

  return (
    <div>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input name="course" value={form.course} placeholder="Course" onChange={handleChange} required />
        <br />
        <input name="rating" value={form.rating} placeholder="Rating (1-5)" onChange={handleChange} required type="number" min="1" max="5" />
        <br />
        <textarea name="message" value={form.message} placeholder="Your feedback" onChange={handleChange} required />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}