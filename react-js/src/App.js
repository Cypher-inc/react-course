import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewTask from "./comps/NewTask";
import ShowTask from "./comps/ShowTask";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { uid } from "uid";
import { onValue, ref, remove, set } from "firebase/database";

function App() {
  const testData = [];

  const [tasks, setTasks] = useState(testData);

  ////////////////
  const [isLoading, setIsLoading] = useState(false);

  // const fetchTasks = async (taskText) => {
  //   console.log('Fetch running');

  //   setIsLoading(true);
  //   const response = await fetch(
  //     "https://crud-react1-f14ef-default-rtdb.firebaseio.com/"
  //   );

  //   if (!response.ok) {
  //     throw new Error("Request failed!");
  //   }

  //   const data = await response.json();
  //   console.log(data);

  //   const loadedTasks = [];

  //   for (const taskKey in data) {
  //     console.log(taskKey);

  //     loadedTasks.push({
  //       text: data[taskKey].text,
  //     });
  //   }
  //   // console.log(loadedTasks);
  //   setTasks(loadedTasks);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchTasks();
  //   // onValue(ref(db),
  //   // )
  // }, []);

  const fetchTasks = (taskText) => {
    setIsLoading(true);

    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      // console.log(data);

      const loadedTasks = [];
      for (const taskKey in data) {
        // console.log(taskKey);

        loadedTasks.push({
          id: data[taskKey].uuid,
          text: data[taskKey].todo,
        });
      }
      // console.log(loadedTasks);
      setTasks(loadedTasks);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const saveTextFunc = (taskText) => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), { ...taskText });
    // fetchTasks();
    // const data = await response.json();
  };

  ///Delelte
  const deleteTextFunc = (taskText) => {
    console.log(taskText.id);
    remove(ref(db, `/${taskText.id}`));
    // fetchTasks();
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
