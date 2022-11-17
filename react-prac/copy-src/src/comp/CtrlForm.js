import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CtrlForm = (props) => {
  const [userName, setUserName] = useState("");

  const formSubFun = (e) => {
    e.preventDefault();
    console.log(userName);
    if (!userName) {
      alert("Name field cannot be empty!");
    } else {
      props.displayCompProp(userName);
      setUserName("");
    }
  };

  const inputChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <Container className="c-form mb-4">
      <Row>
        <hr></hr>
        <Form onSubmit={formSubFun}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={inputChange}
              value={userName}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default CtrlForm;
