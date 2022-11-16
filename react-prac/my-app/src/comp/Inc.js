import React from "react";
import IncBtn from "./IncBtn";
import { useState } from "react";

const Inc = (props) => {
  const [count, setCount] = useState(0)
  //   console.log(props.count);
  const changeCountFun = (data) => {
    // console.log(data);
    setCount(data)
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <IncBtn changeCountFunProp={changeCountFun}></IncBtn>
    </>
  );
};

export default Inc;
