import React from "react";
import { Component } from "react";
import "./index.css";

function Login() {
  return (
    <div className="login">
      <div className="login-inner">
      <div className="login-box">
        <h1>Login</h1>
        <p>Sign In to your account</p>
        <form className="needs-validation" novalidate>
          <div className="form-row">
            <div className="col-md-12 mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="validationTooltipUsernamePrepend"
                  >
                    <i class="bi bi-person"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltipUsername"
                  placeholder="Username"
                  aria-describedby="validationTooltipUsernamePrepend"
                  required
                />
                <div className="invalid-tooltip">
                  Please choose a unique and valid username.
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="validationTooltipUsernamePrepend"
                  >
                    <i class="bi bi-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="validationTooltipUsername"
                  placeholder="Password"
                  aria-describedby="validationTooltipUsernamePrepend"
                  required
                />
                <div className="invalid-tooltip">
                  Please choose a unique and valid username.
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
            <button className="btn btn-secondary" type="button">
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
      <div className="signup">
        <h2>Sign Up</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="btn btn-primary">Register Now!</button>
      </div>
      </div>
    </div>
  );
}

export default Login;
