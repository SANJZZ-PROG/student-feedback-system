import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/Login";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <nav>
        <Link to="/signup">Signup</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/feedback">Feedback</Link>
        {user && (
          <>
            {" | "}Welcome, {user.name}!{" "}
            <button
              onClick={() => {
                setUser(null);
                localStorage.removeItem("token");
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="*" element={<h2>Welcome to Course Feedback System</h2>} />
      </Routes>
    </Router>
  );
}

export default App;