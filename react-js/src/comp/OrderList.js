import React from "react";
import "./OrderList.css";
import "react-bootstrap";
import { Container, Row } from "react-bootstrap";

const OrderList = () => {
  return (
    <Container className="content text-center">
      <Row className="justify-content-center">
        <div className="bg-light mt-5 orderList">
          <div className="d-flex flex-row bd-highlight mb-2 mt-2 justify-content-between">
            <div className="p-2 bd-highlight flex1">
              <p>HEloo</p>
              <p>HEloo</p>
              <p>HEloo</p>
            </div>
            <div className="p-2 bd-highlight flex2">Flex item 2 asdf</div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row bd-highlight mb-2 mt-2 justify-content-between">
            <div className="p-2 bd-highlight flex1">
              <p>HEloo</p>
              <p>HEloo</p>
              <p>HEloo</p>
            </div>
            <div className="p-2 bd-highlight flex2">Flex item 2 asdf</div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row bd-highlight mb-2 mt-2 justify-content-between">
            <div className="p-2 bd-highlight flex1">
              <p>HEloo</p>
              <p>HEloo</p>
              <p>HEloo</p>
            </div>
            <div className="p-2 bd-highlight flex2">Flex item 2 asdf</div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row bd-highlight mb-2 mt-2 justify-content-between">
            <div className="p-2 bd-highlight flex1">
              <p>HEloo</p>
              <p>HEloo</p>
              <p>HEloo</p>
            </div>
            <div className="p-2 bd-highlight flex2">Flex item 2 asdf</div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default OrderList;
