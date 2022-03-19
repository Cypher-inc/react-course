import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalBody from "./ModalBody";

const ModalComp = (props) => {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

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
          <ModalBody></ModalBody>
          <ModalBody></ModalBody>
          <ModalBody></ModalBody>

          <div className="d-flex mt-3 modal-total">
            <h5>Total Amount</h5>
            <span className="modal-total-cost">$55.87</span>
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
