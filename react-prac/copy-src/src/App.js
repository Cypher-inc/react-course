import "./App.css";
import { Container, Row } from "react-bootstrap";
import Inc from "./comp/Inc";
import Dec from "./comp/Dec";
import CtrlForm from "./comp/CtrlForm";
import { useState } from "react";
import DisplayItems from "./comp/DIsplayItems";
import NavbarComp from "./comp/NavbarComp";

function App() {
  const [userData, setUserData] = useState("");

  const displayComp = (data) => {
    console.log(data);
    let dataList = [data];
    setUserData((prevData) => [...prevData, dataList]);

    console.log(userData);
  };

  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Container className="appC mt-5">
        <Row>
          <Inc></Inc>
          <hr></hr>
          <Dec></Dec>
          <CtrlForm displayCompProp={displayComp}></CtrlForm>
          <DisplayItems displayProp={userData}></DisplayItems>
        </Row>
      </Container>
    </div>
  );
}

export default App;
