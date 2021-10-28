import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

import "./login.css";

import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword, startGoogleLogin } from "../../actions/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(startLoginEmailPassword(email, password));
  };

  //Google

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div>
      <Container className="login-container">
        <Row className="justify-content-md-center">
          <Col xs={5}>
            <h1 className="text-center"> Tu Motor </h1>
            <br />
            <Form onSubmit={handleLogin} className="text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <br />
              <Button
                className="login"
                variant="light"
                type="submit"
                disabled={loading}
              >
                Iniciar sesión
              </Button>
            </Form>
            <br />
            <div className="auth__social-networks">
              <div className="google-btn" onClick={handleGoogleLogin}>
                <div className="google-icon-wrapper text-center">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google button"
                  />
                </div>
                <p className="btn-text text-center">
                  <b>Log in with google</b>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
