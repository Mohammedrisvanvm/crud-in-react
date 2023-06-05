import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
  };

  return (
    <>
      <Container className="d-flex justify-content-center py-3">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75 justify-content-center">
          <h1>Register</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="my-2" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-center py-3">
              
              <Button type="submit" variant="primary" className="mt-3">
                Register
              </Button>
            </div>
          </Form>

          <Row className="py-3">
            <Col>
              Already have an account? <Link to={`/login`} className=" text-decoration-none">Login</Link>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default RegisterForm;
