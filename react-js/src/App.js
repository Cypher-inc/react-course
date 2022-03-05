import React from "react";
import { useState } from "react/cjs/react.production.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FormComp from "./comp/FormComp";
import FormInput from "./comp/FormInput";

function App() {

  
  const [userData, setUserData] = useState(userData)
  const InputSaveData = (userData) => {
      console.log(userData);
     setUserData(userData)
  }

  return (
    <div className="container col-md-10">
      <div className="row row-content justify-content-center align-items-center mt-5">
        <FormComp onSaveData={InputSaveData}></FormComp>
        <FormInput userDataProp={userData}></FormInput>

      </div>
    </div>
  );
}

export default App;
