import {
  Container,
  Row,
  Button,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NewTask = () => {
  return (
    <Container className="inputCon bg-primary mt-5 mb-4">
      <Row className="pt-1 pb-1 align-items-center">
        <Col className="col-10">
          <div>
            <InputGroup className="mt-3 mb-3">
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
          </div>
        </Col>
        <Col className="col-but col-2">
          <div>
            <Button variant="warning">Warning</Button>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default NewTask;
