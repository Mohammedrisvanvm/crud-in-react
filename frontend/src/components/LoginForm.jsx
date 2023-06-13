import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state);

  function validationErr() {
    if (
      email.replaceAll(" ", "") === "" ||
      password.replaceAll(" ", "") === ""
    ) {
      return true;
    }
    return false;
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      axios.post("/users/auth", { email, password }).then((response) => {
        if (!response.data.error) {
          dispatch({ type: "refresh" });
          navigate("/");
        } else {
          toast.error(data.message);
        }
      });
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75 justify-content-center">
          <h1>Login</h1>
          <Form onSubmit={submitHandler}>
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
           
            <div className="d-flex justify-content-center py-3">
              <Button
                type="submit"
                disabled={validationErr()}
                variant="primary"
              >
                Login
              </Button>
            </div>
          </Form>

          <Row className="py-3">
            <Col>
              New Customer?{" "}
              <Link to={`/register`} className=" text-decoration-none">
                Register
              </Link>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default LoginForm;
