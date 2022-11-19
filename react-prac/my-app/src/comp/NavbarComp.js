import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarComp = () => {
  const [isHomeActive, setIsHomeActive] = useState(0);

  const activeHomeFun = () => {
    setIsHomeActive(1);
    setIsWelcomeActive(0);
    setIsProductActive(0);
  };

  const [isWelcomeActive, setIsWelcomeActive] = useState(0);

  const activeCounterFun = () => {
    setIsWelcomeActive(1);
    setIsHomeActive(0);
    setIsProductActive(0);
  };

  const [isProductActive, setIsProductActive] = useState(0);

  const activeFormFun = () => {
    setIsProductActive(1);
    setIsHomeActive(0);
    setIsWelcomeActive(0);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                onClick={activeHomeFun}
                className={"nav-link " + (isHomeActive === 1 ? "active" : "")}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={activeCounterFun}
                className={
                  "nav-link " + (isWelcomeActive === 1 ? "active" : "")
                }
                to="/controlled-form"
              >
                Controlled-Form
              </Link>
              <Link
                onClick={activeFormFun}
                className={
                  "nav-link " + (isProductActive === 1 ? "active" : "")
                }
                to="/uncontrolled-form"
              >
                Uncontrolled-form
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarComp;
