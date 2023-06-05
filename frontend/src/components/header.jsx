import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (

    <header>
  
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">CRUD App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
           
              <Nav.Link >
              <Link to={`/login`}> <FaSignInAlt /> Login</Link>
               
               
              </Nav.Link>
         
              <Nav.Link >
              <Link to={`/register`}> <FaSignOutAlt />Register</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
