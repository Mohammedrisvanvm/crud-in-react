import React from "react";
import { NavDropdown, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoggedinHeader = ({ value }) => {
  const {user}=useSelector(state=>state)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <NavDropdown title={user.details.name} id="username">
        <LinkContainer to={`/profile`}>
          <NavDropdown.Item>profile</NavDropdown.Item>
        </LinkContainer>
        <NavDropdown.Item onClick={logoutHandler}>logout</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default LoggedinHeader;
