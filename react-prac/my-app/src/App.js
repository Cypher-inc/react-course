import "./App.css";
import {Container, Row } from "react-bootstrap";
import Inc from "./comp/Inc";
import Dec from "./comp/Dec";
import CtrlForm from "./comp/CtrlForm";
import { useState } from "react";
import DisplayItems from "./comp/DIsplayItems";

function App() {
  const [userData, setUserData] = useState('')

  const displayComp = (data) => {
    console.log(data);
    let dataList = [data]
    setUserData((prevData)=>[...prevData, dataList])

    console.log(userData);
    
  }

  return (
    <div className="App">
      <Container className="appC">
        <Row>
          <Inc></Inc>
          <hr></hr>
          <Dec></Dec>
          <CtrlForm displayCompProp = {displayComp} ></CtrlForm>
          <hr className="mt-4"></hr>
          <DisplayItems displayProp = {userData}></DisplayItems>
        </Row>
      </Container>
    </div>
  );
}

export default App;
