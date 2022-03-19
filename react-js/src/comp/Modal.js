import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalBody from "./ModalBody";

const ModalComp = (props) => {
  let totalDataVal
  const modalToalValRec = (totalData) => {
    console.log(totalData);
    totalDataVal = totalData
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
            dishName={"Sushi"}
            dishCost={22.99}
            dishQuantity={1}
            modalToalVal={modalToalValRec}
          ></ModalBody>
          <ModalBody
            dishName={"Schnitzel"}
            dishCost={16.51}
            dishQuantity={3}
            modalToalVal={modalToalValRec}
          ></ModalBody>
          <ModalBody
            dishName={"Barbeque Borgir"}
            dishCost={12.99}
            dishQuantity={2}
            modalToalVal={modalToalValRec}
          ></ModalBody>

          <div className="d-flex mt-3 modal-total">
            <h5>Total Amount</h5>
            <span className="modal-total-cost">${totalDataVal}</span>
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
