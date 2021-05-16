<<<<<<< HEAD
import React, { useRef, useState } from "react";
import "./index.css";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth, currentUser } from "../contexts/AuthContexts"

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault()

    try{
        setError('');
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        history.push("/")
    } catch {
        setError("Failed to log in");
    }
    setLoading(false);
}

  return (
    <div className="login">
      <div className="login-inner">
        <div className="login-box">
          <h1>Login</h1>
          <p>Sign In to your account</p>
          { error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
                  <Form.Control
                    type="email"
                    placeholder="Username"
                    ref={emailRef}
                    required
                  />
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
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                  />
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
              <Link to="/forgetpassword" className="btn btn-secondary">
                Forgot Password?
              </Link>
            </div>
          </Form>
        </div>
        <div className="signup">
          <h2>Sign Up</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/signup" className="btn btn-primary">
            Register Now!
          </Link>
=======
import React, { useRef, useState } from "react"
import "./index.css"
import { Form, Button, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth, currentUser } from "../contexts/AuthContexts"

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/")
        } catch {
            setError("Failed to Sign In");
        }
        setLoading(false);
    }

    return (
        <div className="login">
            <div className="login-inner">
                <div className="login-box">
                    <h1>Log In</h1>
                    <p>Log in to your account</p>
                    { error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
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
                            <button disabled={loading} className="btn btn-primary" type="submit">
                                Log In
                            </button>
                            <Link to="/forgetpassword" className="btn btn-secondary">Forgot Password?</Link>
                        </div>
                    </Form>
                </div>
                <div className="signup">
                    <h2>Sign Up</h2>
                    <p>
                        Need an account?
                    </p>
                    <Link to="/signup" className="btn btn-primary">Register Now!</Link>
                </div>
            </div>
>>>>>>> 01ca827aee3ccefcdc4517a422aeb2c06ddb8382
        </div>
    );
}

export default Login;
