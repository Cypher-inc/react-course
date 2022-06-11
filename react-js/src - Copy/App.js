import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewTask from "./comps/NewTask";
import ShowTask from "./comps/ShowTask";
import { useState, useEffect } from "react";
import { db, app } from "./firebase";
import { onValue, ref, remove, set, update, push, orderByValue} from "firebase/database";
// import { firebase } from "./firebase";

function App() {
  const testData = [];

  const [tasks, setTasks] = useState(testData);

  ////////////////
  const [isLoading, setIsLoading] = useState(false);

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
          done: data[taskKey].taskStatus,
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

  const saveTextFunc = (TextData) => {
    console.log(TextData.todo);

    // set(ref(db, `/${TextData.uuid}`), {
    //   ...TextData
    // });

    const postListRef = ref(db, `/${TextData.uuid}`);
    // const newPostRef = push(postListRef);
    set(postListRef, {
      ...TextData,
    }, orderByValue());

    // var messageListRef = firebase.database().ref('message_list');
    // var newMessageRef = messageListRef.push();
    // newMessageRef.set({
    //   ...TextData
    // });
  };

  ///Delelte
  const deleteTextFunc = (taskText) => {
    remove(ref(db, `/${taskText.id}`));
    // db().ref(`/${taskText.id}`).remove();
    // fetchTasks();
    console.log(taskText);
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
