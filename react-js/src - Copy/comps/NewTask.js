import { useState } from "react";
import {
  Container,
  Row,
  Button,
  Col,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NewTask = (props) => {
  const [inputText, setInputText] = useState("");
  const changeFunc = (event) => {
    // console.log(inputText);
    setInputText(event.target.value);
  };

  const submitFunc = (event) => {
    event.preventDefault();
    if(inputText.length===0){
      alert('Input Text empty!')
      return
    }
    const textData = {
      id: Math.floor(Math.random() * 1000),
      text: inputText,
    };
    props.onSaveText(textData);
    // console.log(textData.id);
    // console.log(inputText);

    setInputText("");
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
                  value={inputText}
                  className="input-box"
                  aria-label="Text input with checkbox"
                />
              </InputGroup>
            </div>
          </Col>
          <Col className="col-but col-2">
            <div>
              <Button variant="warning" type="submit">
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
