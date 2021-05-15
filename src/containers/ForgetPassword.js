import React, { useRef,  useState } from "react"
import "./index.css"
import { Form, Button, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContexts"

function ForgetPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')
  

  async function handleSubmit(e) {
    e.preventDefault()

    try{
        setMessage('')
        setError('');
        setLoading(true);
        await resetPassword(emailRef.current.value);
        setMessage("Check your inbox for further instructions");
    } catch {
        setError("Failed to reset password");
    }
    setLoading(false);
}

  return (
    <div className="login">
      <div className="login-inner">
        <div className="login-box">
          <h1>Forgot Password?</h1>
          <p>Enter your Email ID</p>
          { error && <Alert variant="danger">{error}</Alert>}
          { message && <Alert variant="success">{message}</Alert>}
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
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <button className="btn btn-primary" type="submit">
                Send Reset Link
              </button>
            </div>
          </Form>
          <div className="d-flex align-items-center justify-content-between mt-3">
          <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
