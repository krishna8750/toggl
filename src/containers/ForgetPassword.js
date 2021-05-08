import React, { useRef } from "react"
import "./index.css"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function ForgetPassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <div className="login">
      <div className="login-inner">
        <div className="login-box">
          <h1>Forget Password?</h1>
          <p>Enter your Email ID</p>
          <Form>
            <div className="form-row">
              <div className="col-md-12 mb-3">
                <Form.Group className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="validationTooltipUsernamePrepend"
                    >
                      <i class="bi bi-person"></i>
                    </span>
                  </div>
                  <Form.Control type="email" placeholder="Username" ref={emailRef} required />
                  <div className="invalid-tooltip">
                    Please choose a unique and valid username.
                  </div>
                </Form.Group>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <button className="btn btn-primary" type="submit">
                Send Reset Link
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
