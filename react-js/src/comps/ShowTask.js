import { Container, Row, Button } from "react-bootstrap";
import { useState } from "react";

const ShowTask = (props) => {
  let emptyVar;

  const [addClass, setAddClass] = useState();

  const addClassFunc = () => {
    if (!addClass) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  const deleteTextFunc = () => {
    console.log(props.items[1].text);
    console.log(props.items[1].id);

    var testVar = props.items.filter((new1) => new1.text);

    // console.log(testVar);

    props.onDeleteText(testVar)
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
        <Button variant="success" className="btn1 suc" onClick={addClassFunc}>
          ✔
        </Button>
        <p className={`text-p ${addClass ? "rowFade" : ""}`}>{newData.text}</p>
        <Button variant="danger" className="btn1 del" onClick={deleteTextFunc}>
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
