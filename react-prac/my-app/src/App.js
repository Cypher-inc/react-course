import "./App.css";
import {Container, Row } from "react-bootstrap";
import Inc from "./comp/Inc";
import Dec from "./comp/Dec";
import CtrlForm from "./comp/CtrlForm";

function App() {


  return (
    <div className="App">
      <Container className="appC">
        <Row>
          <Inc></Inc>
          <Dec></Dec>
          <CtrlForm></CtrlForm>
        </Row>
      </Container>
    </div>
  );
}

export default App;
