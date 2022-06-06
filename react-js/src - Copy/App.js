import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewTask from "./comps/NewTask";
import ShowTask from "./comps/ShowTask";
import { useState } from "react";

function App() {

  const testData = [{
    text: 'Demo Data'
  },
{
  text: "Demo Data"
}]

  const [expenses, setExpenses] = useState(testData);

  const saveTextFunc = (dataRecieved) => {
      // const textData = {
      //   ...dataRecieved
      // }
      // console.log(textData);
      
    setExpenses((prevExpenses) => {
      return [...prevExpenses, dataRecieved];
    });

      // setExpenses([dataRecieved, ...expenses]) //wrong way
  };

  return (
    <>
      <NewTask onSaveText={saveTextFunc}></NewTask>

      <ShowTask items={expenses}></ShowTask>
    </>
  );
}

export default App;
