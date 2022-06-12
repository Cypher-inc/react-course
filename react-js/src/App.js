import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewTask from "./comps/NewTask";
import ShowTask from "./comps/ShowTask";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  onValue,
  ref,
  remove,
  set,
  update,
  query,
  orderByChild,
} from "firebase/database";
import { Container, Row, Button } from "react-bootstrap";

function App() {
  const testData = [];

  const [tasks, setTasks] = useState(testData);

  ////////////////
  const [isLoading, setIsLoading] = useState(false);

  //read
  const fetchTasks = () => {
    setIsLoading(true);

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
      setTasks(loadedTasks);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const saveTextFunc = (TextData) => {
    const test = query(ref(db, `/${TextData.uuid}`));
    set(test, {
      ...TextData,
    });
  };

  ///Delelte
  const deleteTextFunc = (taskText) => {
    remove(ref(db, `/${taskText.id}`));
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
    <Container className="glassEffect mt-5 mb-3">
      <Row>
        <NewTask onSaveText={saveTextFunc}></NewTask>
        <ShowTask
          items={tasks}
          isLoadingProp={isLoading}
          onDeleteText={deleteTextFunc}
          onDone={updateFunc}
        ></ShowTask>
      </Row>
    </Container>
  );
}

export default App;
