import { Container, Row, Button } from "react-bootstrap";

const ShowTask = (props) => {
  let emptyVar;
  let addClassBtn;
  const addClassFunc = () => {
    if (addClassBtn) {
      addClassBtn = false;
    } else {
      addClassBtn = true;
    }
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
        <p className="text-p">{newData.text}</p>
        <Button variant="danger" className="btn1 del">
          ❌
        </Button>
      </ul>
    ));
  }

  return (
    <Container className="inputCon bg-primary mt-2 mb-5 ">
      <Row className="text-center">
        <div className={`task-list" ${addClassBtn ? "rowFade" : ""}`}>
          {emptyVar}
        </div>
      </Row>
    </Container>
  );
};
export default ShowTask;
