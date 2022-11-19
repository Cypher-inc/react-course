import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavComp = () => {
  const [isHomeActive, setIsHomeActive] = useState(0);

  const activeHomeFun = () => {
    setIsHomeActive(1);
    setIsWelcomeActive(0);
    setIsProductActive(0);
  };

  const [isWelcomeActive, setIsWelcomeActive] = useState(0);

  const activeWelcomeFun = () => {
    setIsWelcomeActive(1);
    setIsHomeActive(0);
    setIsProductActive(0);
  };

  const [isProductActive, setIsProductActive] = useState(0);

  const activeProductFun = () => {
    setIsProductActive(1);
    setIsHomeActive(0);
    setIsWelcomeActive(0);
  };
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/welcome">Welcome</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products">Products</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  onClick={activeHomeFun}
                  className={"nav-link " + (isHomeActive === 1 ? "active" : "")}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={activeWelcomeFun}
                  className={
                    "nav-link " + (isWelcomeActive === 1 ? "active" : "")
                  }
                  to="/welcome"
                >
                  Welcome
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={activeProductFun}
                  className={
                    "nav-link " + (isProductActive === 1 ? "active" : "")
                  }
                  to="/products"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavComp;
