import { Navbar, Nav, Container } from "react-bootstrap";
import HeaderController from "./HeaderController";
import { LinkContainer } from "react-router-bootstrap";
import LoggedinHeader from "./LoggedinHeader";
import { useSelector } from "react-redux";

const Header = () => {
const {user}=useSelector((state)=>state)

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>CRUD App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              { user.details ? <LoggedinHeader/> : <HeaderController/>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
