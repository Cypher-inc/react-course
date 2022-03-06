import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button} from 'react-bootstrap';
import { useState } from "react";

const FormModal = (props) => {

  const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // if(props.onTest){
  //   console.log('True');
  //  setShow(true)
  // }
  return (
    <>

      <Modal show={show}>
        <Modal.Header closeButton onClick={props.onConfirm}>
          <Modal.Title>{props.formTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onConfirm}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default FormModal;