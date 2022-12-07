import React, {useState} from "react";
import {  useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login(){
  const navigate = useNavigate()
  const [details, setDetails] = useState({ username: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(details),
    }).then((result) => {
      if (result.status === 200) {
        navigate("/home");
      }
    });
    function handleChange(e) {
      setDetails((details) => ({
        ...details,
        [e.target.value]: e.target.value,
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
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="username"
                  placeholder="Enter username"
                  name="username"
                  value={details.username}
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
                  name="pswd"
                  value={details.username}
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
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
