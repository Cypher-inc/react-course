import { useEffect, useState } from "react";

const EffectCompTest = () => {
  const [testApiData, setTestApiData] = useState("Hello World");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/2"
        );
        const jsonData = await response.json();
        setTestApiData(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
    console.log(testApiData);

  let listData = "Hi"

  const values = Object.entries(testApiData);
  console.log(values);
  
  listData = values.map((val) => (
    <h4>{val[0]} : {val[1].toString()}</h4>
  ));

//   const listData = testApiData.map((item) => (
//     <>
//       <p>UserID: {item.userId}</p>
//       <p>ID: {item.id}</p>
//       <p>Title: {item.title}</p>
//       <p>Completed: {item.completed.toString()}</p>
//     </>
//   ));

  return (
    <>
      <h5>{listData}</h5>
    </>
  );
};

export default EffectCompTest;
