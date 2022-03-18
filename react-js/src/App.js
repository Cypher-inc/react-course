import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./comp/NavBar";
import OrderList from "./comp/OrderList";
import "./index.css";

const App = () => {
  return (
    <>
      <NavBar></NavBar>

      <div className="container d-flex h-100 main">
        <div className="row justify-content-center align-self-center">
          <h1 className="text-center mt-4">Hello</h1>
          <OrderList></OrderList>
        </div>
      </div>
    </>
  );
};

export default App;
