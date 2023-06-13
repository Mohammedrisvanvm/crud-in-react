import { Navbar, Nav, Container } from "react-bootstrap";
import HeaderController from "./HeaderController";
import { LinkContainer } from "react-router-bootstrap";
import LoggedinHeader from "./LoggedinHeader";

const Header = ({login}) => {


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
              {login ? <LoggedinHeader/> : <HeaderController/>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
