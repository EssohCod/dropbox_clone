import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import './Signup.css';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <CenteredContainer>
      <Card className="signup-card">
        <Card.Body>
          <h2 className="text-center mb-4 signup-header">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mb-3">
              <Form.Control
                className="signup-input"
                type="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password" className="mb-3">
              <Form.Control
                className="signup-input"
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group id="password-confirm" className="mb-4">
              <Form.Label className="signup-label">Password Confirmation</Form.Label>
              <Form.Control
                className="signup-input"
                type="password"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100 signup-button"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            Already have an account? <Link to="/login" className="signup-link">Sign In</Link>
          </div>
        </Card.Body>
      </Card>
    </CenteredContainer>
  );
}
