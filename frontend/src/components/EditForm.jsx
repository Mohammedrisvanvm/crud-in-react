import React from 'react'
import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
function EditForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
    }
  return (
    <Container className="d-flex justify-content-center py-3">
    <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75 justify-content-center">
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

            {isloading && <Loader/>}
            <div className="d-flex justify-content-center py-3">
              <Button type="submit" variant="primary" className="mt-3">
                Register
              </Button>
            </div>
          </Form>
          </Card>
          </Container>
  )
}

export default EditForm
