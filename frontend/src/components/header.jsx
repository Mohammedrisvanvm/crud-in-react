import { Navbar, Nav, Container } from "react-bootstrap";
import HeaderController from "./HeaderController";
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector } from "react-redux";
import LoggedinHeader from "./LoggedinHeader";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return (

    <header>
  
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={'/'}>
          <Navbar.Brand >CRUD App</Navbar.Brand>
          </LinkContainer >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              {userInfo ? <LoggedinHeader userInfo={userInfo}/> : <HeaderController/> }
          
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
