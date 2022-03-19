import "./ModalBody.css";

const ModalBody = () => {
  return (
      <>
    <div className="pt-2 pb-3 m-1 order-details">
      <h5>Schnitzel</h5>
      <div className="d-flex modal-info align-items-center">
        <span className="ModalTotal">$16.5</span>
        <span className="ModalQuantity">x2</span>
        <div>
          <button type="button" className="btn btn-outline-dark dark-btn1">
            ➖
          </button>
          <button type="button" className="btn btn-outline-dark">
            ➕
          </button>
        </div>
      </div>
    </div>

    </>
  );
};

export default ModalBody;
