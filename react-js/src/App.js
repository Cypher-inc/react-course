import { Container , Row} from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewTask from "./NewTask";

function App() {
  return (
    <>
      <NewTask></NewTask>

      <Container className="inputCon bg-primary mt-2 mb-5 ">
        <Row className="text-center">
          <div className="task-list">
          <ul>
            <p> Demo Text</p>
          </ul>
          <ul>
            <p> Demo Text</p>
          </ul>
          <ul>
            <p> Demo Text</p>
          </ul>
        
          </div>
          
        </Row>
      </Container>
    </>
  );
}

export default App;
