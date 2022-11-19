import "./App.css";
import { Container, Row } from "react-bootstrap";
import Inc from "./comp/Inc";
import Dec from "./comp/Dec";
import CtrlForm from "./comp/CtrlForm";
import { useState } from "react";
import DisplayItems from "./comp/DIsplayItems";
import NavbarComp from "./comp/NavbarComp";
import UnCtrlForm from "./comp/UnCtrlForm";

function App() {
  const [userData, setUserData] = useState("");

  const displayComp = (data) => {
    let x = Math.floor(Math.random() * 10000000 + 1);

    let ctrData = {
      uid: x,
      Name: data,
    };

    setUserData((prevData) => [...prevData, ctrData]);

    // console.log(userData);
  };

  const ucFormFun = (ucNameVal) => {
    let x = Math.floor(Math.random() * 10000000 + 1);

    // console.log(x);
    let ucData = {
      uid: x,
      Name: ucNameVal,
    };

    setUserData((prevData) => [...prevData, ucData]);
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
          <UnCtrlForm ucFormProp={ucFormFun}></UnCtrlForm>
          <DisplayItems displayProp={userData}></DisplayItems>
        </Row>
      </Container>
    </div>
  );
}

export default App;
