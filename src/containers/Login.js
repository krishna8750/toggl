import React, { useRef } from "react"
import "./index.css"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  
  return (
    <div className="login">
      <div className="login-inner">
        <div className="login-box">
          <h1>Login</h1>
          <p>Sign In to your account</p>
          <Form>
            <div className="form-row">
              <div className="col-md-12 mb-3">
                <Form.Group className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="validationTooltipUsernamePrepend"
                    >
                      <i className="bi bi-person"></i>
                    </span>
                  </div>
                  <Form.Control type="email" placeholder="Username" ref={emailRef} required />
                  <div className="invalid-tooltip">
                    Please choose a unique and valid username.
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-12 mb-3">
                <Form.Group className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="validationTooltipUsernamePrepend"
                    >
                      <i className="bi bi-lock"></i>
                    </span>
                  </div>
                  <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                  <div className="invalid-tooltip">
                    Please choose a unique and valid Password.
                  </div>
                </Form.Group>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <Button className="btn btn-primary" type="submit">
                  Login
              </Button>
              <Link to="/forgetpassword" className="btn btn-secondary">Forgot Password?</Link>
            </div>
          </Form>
        </div>
        <div className="signup">
          <h2>Sign Up</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/signup" className="btn btn-primary">Register Now!</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
