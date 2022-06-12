import { useState } from "react";
import { Container, Row, Button, InputGroup, Form } from "react-bootstrap";
import { uid } from "uid";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../comps/NewTasks.css";

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

    setInputText("");
  };

  return (
    <Container className="inputCon mt-4 mb-4">
      <Row>
        <h1 className="text-center mt-4">To-Do List</h1>
        <form onSubmit={submitFunc}>
          <InputGroup className="mt-3 mb-3 input-txt">
            <Form.Control
              className="inputBox"
              onChange={changeFunc}
              value={inputText}
              placeholder="Enter task.."
              aria-label="Enter tasks"
              aria-describedby="basic-addon2"
            />
            <Button variant="warning" type="submit" className="inputBoxBtn">
              Enter Task
            </Button>{" "}
          </InputGroup>
        </form>
      </Row>
    </Container>
  );
};
export default NewTask;
