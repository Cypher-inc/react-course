import { useState } from "react";
import {
  Container,
  Row,
  Button,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NewTask = () => {
  const [inputText, setInputText] = useState();

  const changeFunc = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  const submitFunc = (event) => {
    event.preventDefault()
    const textData = {
      text: inputText,
    }

    setInputText('')
  };

  return (
    <form onSubmit={submitFunc}>
      <Container className="inputCon bg-primary mt-5 mb-4">
        <Row className="pt-1 pb-1 align-items-center">
          <Col className="col-10">
            <div>
              <InputGroup className="mt-3 mb-3 input-txt">
                <FormControl
                  onChange={changeFunc}
                  className="input-box"
                  aria-label="Text input with checkbox"
                />
              </InputGroup>
            </div>
          </Col>
          <Col className="col-but col-2">
            <div>
              <Button variant="warning">
                Enter Task
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </form>
  );
};
export default NewTask;
