import { useState } from "react";
import {
  Container,
  Row,
  Button,
  Col,
  InputGroup,
  FormControl,
  Form
} from "react-bootstrap";
import { uid } from "uid";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NewTask = (props) => {
  const [inputText, setInputText] = useState("");

  const changeFunc = (event) => {
    // console.log(inputText);
    setInputText(event.target.value);
  };

  const submitFunc = (event) => {
    event.preventDefault();
    if (inputText.length === 0) {
      alert("Input Text empty!");
      return;
    }
    const uuid = uid();
    const textData = {
      todo: inputText,
      uuid,
      taskStatus: false,
      timeStamp: new Date().getTime(),
    };
    props.onSaveText(textData);
    // set(ref(db, `/${uuid}`), {
    //   ...textData
    // });

    // console.log(textData.id);
    // console.log(inputText);

    setInputText("");
  };

  return (
    <form onSubmit={submitFunc}>
      <Container className="inputCon bg-primary mt-5 mb-4">
        <Row className="pt-1 pb-1 align-items-center">
          {/* <Col className="col-10">
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
          </Col> */}

          <InputGroup className="mt-3 mb-3 input-txt">
        <Form.Control
        onChange={changeFunc}
        value={inputText}
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
        </Row>
      </Container>
    </form>
  );
};
export default NewTask;
