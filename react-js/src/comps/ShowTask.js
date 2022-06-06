import { Container, Row } from "react-bootstrap";

const ShowTask = (props) => {

  let emptyVar;
  if (props.items.length === 0) {
    emptyVar = <ul className="bg-secondary"><p>{"No Data Found"}</p></ul>;
  } else if (props.items.length > 0) {
    emptyVar = props.items.map((newData) => <ul><p>{newData.text}</p></ul>);
  }

  return (
    <Container className="inputCon bg-primary mt-2 mb-5 ">
      <Row className="text-center">
        <div className="task-list">
          {emptyVar}
        </div>
      </Row>
    </Container>
  );
};
export default ShowTask;
