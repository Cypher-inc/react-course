import React from "react";
import {Button} from "react-bootstrap";
import { useState } from "react";

const IncBtn = (props) => {
  const [count, setCount] = useState(0);
  // let count
  const counterFun = () => {
    setCount(count + 1);
    // count += 1
    props.changeCountFunProp(count)
  };
  return <Button onClick={counterFun}>Click me</Button>;
};
export default IncBtn;
