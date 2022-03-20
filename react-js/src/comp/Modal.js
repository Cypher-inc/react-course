import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalBody from "./ModalBody";

const ModalComp = (props) => {
  // let totalDataVal;
  // const modalToalValRec = (totalData) => {
  //   console.log(totalData);
  //   totalDataVal = totalData;
  // };

  const [totalAmount,setTotalAmount] = useState(0)
  const calcTotalCost = (totalVal) => {
    console.log(totalVal);
    setTotalAmount(totalVal)
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.value} onHide={props.closeProp}>
        <Modal.Header closeButton>
          <Modal.Title>Your Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalBody
            totalFunc={calcTotalCost}
            dishName={"Sushi"}
            dishCost={22.99}
            dishQuantity={1}
          ></ModalBody>
          <ModalBody
            totalFunc={calcTotalCost}
            dishName={"Schnitzel"}
            dishCost={16.51}
            dishQuantity={3}
          ></ModalBody>
          <ModalBody
            totalFunc={calcTotalCost}
            dishName={"Barbeque Borgir"}
            dishCost={12.99}
            dishQuantity={2}
          ></ModalBody>

          <div className="d-flex mt-3 modal-total">
            <h5>Total Amount</h5>
            <span className="modal-total-cost">${totalAmount}</span>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success">Order</Button>
          <Button variant="secondary" onClick={props.closeProp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComp;
