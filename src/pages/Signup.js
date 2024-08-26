import React, { useState } from "react";
import { TbInbox } from "react-icons/tb";
import { useNavigate } from "react-router-dom"; // Make sure you are using react-router for navigation

function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    localStorage.setItem("registeredUser", JSON.stringify(user));

    // Clear form
    setUser({ username: "", email: "", password: "" });

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="row text-center">
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            style={{ margin: "100px 0", textAlign: "center", color: "skyblue" }}
          >
            <div className="form-group my-3">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="form-control"
                id="username"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="form-control"
                id="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-danger px-3 rounded-pill">
              Sign Up <TbInbox />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
