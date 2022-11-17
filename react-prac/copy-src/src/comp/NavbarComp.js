import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComp = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Inc">Inc</Nav.Link>
            <Nav.Link href="#Dec">Dec</Nav.Link>
            <Nav.Link href="#formC">FormC</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
