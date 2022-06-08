import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewTask from "./comps/NewTask";
import ShowTask from "./comps/ShowTask";
import { useState, useEffect } from "react";

function App() {
  const testData = [];

  const [tasks, setTasks] = useState(testData);

  // const saveTextFunc = (dataRecieved) => {
  //     // const textData = {
  //     //   ...dataRecieved
  //     // }
  //     // console.log(textData);

  //   setExpenses((prevExpenses) => {
  //     return [...prevExpenses, dataRecieved];
  //   });

  // setExpenses([dataRecieved, ...expenses]) //wrong way
  // };

  ////////////////
  const [isLoading, setIsLoading] = useState(false);
  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    const response = await fetch(
      "https://cus-hook3-default-rtdb.firebaseio.com/tasks.json"
    );

    if (!response.ok) {
      throw new Error("Request failed!");
    }

    const data = await response.json();

    const loadedTasks = [];

    for (const taskKey in data) {
      // console.log(taskKey);

      loadedTasks.push({
        id: data[taskKey].id,
        text: data[taskKey].text,
      });
    }

    // console.log(loadedTasks);
    setTasks(loadedTasks);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const saveTextFunc = async (taskText) => {
    const response = await fetch(
      "https://cus-hook3-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "POST",
        body: JSON.stringify(taskText),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    fetchTasks();
    // const data = await response.json();
  };

  ///Delelte

  const deleteTextFunc = async (taskText) => {
    setIsLoading(true);
    console.log(taskText);

    const response = await fetch(
      "https://cus-hook3-default-rtdb.firebaseio.com/tasks.json",
      { method: "DELETE" }
    );

    if (!response.ok) {
      throw new Error("Request failed!");
    }

    const data = await response.json();

    const loadedTasks = [];

    for (const taskText in data) {
      // console.log(taskKey);

      loadedTasks.push({
        id: data[taskText].id,
        text: data[taskText].text,
      });
    }

    loadedTasks.pop();

    console.log(loadedTasks);

    setTasks(loadedTasks);

    fetchTasks();
    setIsLoading(false);
  };

  return (
    <>
      <NewTask onSaveText={saveTextFunc}></NewTask>

      <ShowTask
        items={tasks}
        isLoadingProp={isLoading}
        onDeleteText={deleteTextFunc}
      ></ShowTask>
    </>
  );
}

export default App;
