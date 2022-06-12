import { Container, Row, Button } from "react-bootstrap";
import "./ShowTasks.css";

const ShowTask = (props) => {
  let emptyVar;

  ///update
  const addClassFunc = (newData0) => {
    // console.log(newData0.text);
    props.onDone(newData0);
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
      <div className="text-center borderRadius">
        <ul
          className={`${
            newData.done ? "rowFade" : ""
          } d-flex justify-content-between `}
        >
          <Button
            variant="success"
            className="btn1 suc"
            onClick={() => addClassFunc(newData)}
          >
            ✔
          </Button>
          <p className={`text-p ${newData.done ? "pFade" : ""}`}>
            {newData.text}
          </p>
          <Button
            variant="danger"
            className="btn1 del"
            onClick={() => deleteTextFunc(newData)}
          >
            ❌
          </Button>
        </ul>
      </div>
    ));
  }

  return (
    <Container className="displayCon mt-1 mb-5 ">
      <Row>{emptyVar}</Row>
    </Container>
  );
};
export default ShowTask;
