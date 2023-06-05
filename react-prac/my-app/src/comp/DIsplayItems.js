import React from "react";
import { Container, Row } from "react-bootstrap";

const DisplayItems = (props) => {
  console.log(props.displayProp);
  let listDisplay = "";

  if (props.displayProp.length === 0) {
    listDisplay = (
      <div className="card mt-5 mb-5">
        <div className="card-body text-center bg-black">No name Entered</div>
      </div>
    );
  } else {
    listDisplay = props.displayProp.map((newData) => (
      <div className="card mb-3 mt-3" key={newData.uid}>
        <div className="card-body text-center bg-black">{newData.Name}</div>
      </div>
    ));
  }

  return (
    <Container>
      <Row>{listDisplay}</Row>
    </Container>
  );
};
export default DisplayItems;
