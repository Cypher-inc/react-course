import "./ModalBody.css";
import { React, useState } from "react";

const ModalBody = (props) => {
  const [quantityVal, setQuantityVal] = useState(props.dishQuantity);
  
//   let quantityVal2;
//   const decFunc = () => {
//     let quantityVal1 = document.querySelector(".ModalQuantity").textContent;
//     // console.log(quantityVal1[1]);
//     quantityVal2 = Number(quantityVal1[1]);
//     quantityVal2 += quantityVal2+
//     console.log(quantityVal2);
    
//   };

    const testQuantVal = (event) => {
        console.log(event.target.value);
    }

  //Calc total function
  let total = 0;
  // let total1
  const calcTotal = (x, y) => {
    total += x * y;
    // total1 = total
    // console.log(total);
  };
  calcTotal(props.dishCost, props.dishQuantity);

  function sendTotal() {
    props.modalToalVal(total);
  }
  //   console.log(sendTotal);

  return (
    <>
      <div className="pt-2 pb-3 m-1 order-details">
        <h5>{props.dishName}</h5>
        <div className="d-flex modal-info align-items-center">
          <span className="ModalTotal">${props.dishCost}</span>
          <span className="ModalQuantity" value={quantityVal}
          onLoad={testQuantVal}>
            x{props.dishQuantity}
          </span>
          <div>
            <button
              type="button"
              className="btn btn-outline-dark dark-btn1"
            //   onClick={decFunc}
            >
              ➖
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={sendTotal}
            >
              ➕
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBody;
