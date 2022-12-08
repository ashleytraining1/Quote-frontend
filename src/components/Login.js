import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ username: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(details),
    }).then((result) => {
      if (result.status === 200) {
        setDetails({ username: "", password: "" });
        navigate("/quotes");
      } else {
        alert("You need to have an account.");
      }
    });
  }
  function handleChange(e) {
    console.log(details);
    setDetails((details) => ({
      ...details,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="header">
              <h1>Login Form</h1>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">
                Username:
              </label>
              <input
                type="text"
                placeholder="Enter username"
                name="name"
                value={details.name}
                onChange={handleChange}
                className="form-control"
                id="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Password:
              </label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={details.password}
                onChange={handleChange}
                className="form-control"
                id="pwd"
              />
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Remember me
              </label>
            </div>
            <button type="login" className="btn btn-primary">
              Login
            </button>
            <p>Don't have an account? &nbsp; Sign Up</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
