import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewTask from "./comps/NewTask";
import ShowTask from "./comps/ShowTask";
import { useState, useEffect } from "react";
import { db, app } from "./firebase";
import {
  onValue,
  ref,
  remove,
  set,
  update,
  push,
  orderByValue,
  query,
  orderByChild,
} from "firebase/database";
// import { firebase } from "./firebase";

function App() {
  const testData = [];

  const [tasks, setTasks] = useState(testData);

  ////////////////
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = () => {
    setIsLoading(true);

    // const test = query(ref(db),orderByChild("timeStamp"))
    // onValue(test, (snapshot) => {
    //   const data = snapshot.val();
    //   // console.log(data);

    //   const loadedTasks = [];
    //   for (const taskKey in data) {
    //     // console.log(taskKey);

    //     loadedTasks.push({
    //       id: data[taskKey].uuid,
    //       text: data[taskKey].todo,
    //       done: data[taskKey].taskStatus,
    //       time: data[taskKey].timeStamp
    //     });
    //   }
    //   console.log(loadedTasks);

    //   setTasks(loadedTasks);
    //   setIsLoading(false);
    // });

    const test = query(ref(db), orderByChild("timeStamp"));
    onValue(test, (snapshot) => {
      const loadedTasks = [];
      snapshot.forEach((child) => {
        const data = child.val();
        console.log(data);
        loadedTasks.push({
          id: data.uuid,
          text: data.todo,
          done: data.taskStatus,
          time: data.timeStamp,
        });
      });
      setTasks(loadedTasks)
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const saveTextFunc = (TextData) => {
    // console.log(TextData.todo);

    // set(ref(db, `/${TextData.uuid}`), {
    //   ...TextData
    // });

    const test = query(ref(db, `/${TextData.uuid}`));
    set(test, {
      ...TextData,
    });
  };

  ///Delelte
  const deleteTextFunc = (taskText) => {
    remove(ref(db, `/${taskText.id}`));
    // db().ref(`/${taskText.id}`).remove();
    // fetchTasks();
    // console.log(taskText);
  };

  ///update
  const updateFunc = (taskData) => {
    console.log(taskData.id);
    update(ref(db, `/${taskData.id}`), {
      todo: taskData.text,
      uuid: taskData.id,
      taskStatus: !taskData.done,
    });
    console.log(taskData);
  };

  return (
    <>
      <NewTask onSaveText={saveTextFunc}></NewTask>

      <ShowTask
        items={tasks}
        isLoadingProp={isLoading}
        onDeleteText={deleteTextFunc}
        onDone={updateFunc}
      ></ShowTask>
    </>
  );
}

export default App;
