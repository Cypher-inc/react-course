import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Button } from "react-bootstrap";
import { useRef } from "react";

const UnCtrlForm = (props) => {
  const uncontrolledRef = useRef();

  const formSubmitUc = (e) => {
    e.preventDefault();

    // console.log(uncontrolledRef.current.value);
    let ucNameVal = uncontrolledRef.current.value;
    if (!ucNameVal) {
      alert("Input Field cannot be empty!");
    } else {
      props.ucFormProp(ucNameVal);
      uncontrolledRef.current.value = "";
    }
  };

  return (
    <Container className="mt-1">
      <Row>
        <h2 className="text-center">Uncontrolled Form</h2>
        <Form onSubmit={formSubmitUc}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Last Name</Form.Label>
            <Form.Control
              ref={uncontrolledRef}
              type="text"
              placeholder="Enter LastName"
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
export default UnCtrlForm;
