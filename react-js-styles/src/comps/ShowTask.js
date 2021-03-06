import { Container, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { db } from "../firebase";
import { onValue, ref, remove, set, update } from "firebase/database";

const ShowTask = (props) => {
  let emptyVar;

  ///update
  const addClassFunc = (newData0) => {
    // console.log(newData0.text);
    props.onDone(newData0)
  };


  /////delete
  const deleteTextFunc = (newData1) => {
    // console.log(testVar);
    props.onDeleteText(newData1);
  };

  if (props.isLoadingProp) {
    emptyVar = (
      <ul className="bg-light">
        <p>{"⏳ Loading..."}</p>
      </ul>
    );
  } else if (props.items.length === 0) {
    emptyVar = (
      <ul className="bg-secondary">
        <p>{"No Data Found"}</p>
      </ul>
    );
  } else if (props.items.length > 0) {
    emptyVar = props.items.map((newData) => (
      <ul className="d-flex justify-content-between">
        <Button
          variant="success"
          className="btn1 suc"
          onClick={() => addClassFunc(newData)}
        >
          ✔
        </Button>
        <p className={`text-p ${newData.done ? "rowFade" : ""}`}>{newData.text}</p>
        <Button
          variant="danger"
          className="btn1 del"
          onClick={() => deleteTextFunc(newData)}
        >
          ❌
        </Button>
      </ul>
    ));
  }

  return (
    <Container className="inputCon bg-primary mt-2 mb-5 ">
      <Row className="text-center">
        <div className={`task-list`}>{emptyVar}</div>
      </Row>
    </Container>
  );
};
export default ShowTask;
