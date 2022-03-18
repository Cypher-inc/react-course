import { Container, Navbar, Nav, Button } from "react-bootstrap";
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="navbar-main justify-content-between">
        <Navbar.Brand href="#home">React Meals</Navbar.Brand>
        <Nav className="d-flex flex-row-reverse">
            <Button variant="primary" size="lg">
              🛒 Your Cart <span className="cart-val">5</span>
            </Button>{" "}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
