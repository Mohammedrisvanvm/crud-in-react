import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserUpdateMutation } from "../slices/userApiSlice";
function EditForm() {
  let { id } = useParams();

  const [userid, setuserId] = useState(id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updateProfile, { isLoading }] = useUserUpdateMutation();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/userUnique/${userid}`)
      .then((response) => {
        console.log(response);
        setEmail(response.data.email);
        setName(response.data.name);
      });
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("password do not match");
    } else {
      try {
        await axios
          .put("http://localhost:5000/admin/profile", {
            id: userid,
            name: name,
            email: email,
            password: password,
          })
          .then((response) => {
            if (response.data.success) {
              toast.success("profile updated");
              navigate("/admin/adminHome");
            }
          });
      } catch (err) {
        toast.error(err);
      }
    }
  };
  return (
    <Container className="d-flex justify-content-center py-3">
      <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75 justify-content-center">
        <h1>Edit User</h1>
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
              placeholder="optional"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="my-2" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="optional"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <div className="d-flex justify-content-center py-3">
            <Button type="submit" variant="primary" className="mt-3">
              UPDATE
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default EditForm;
