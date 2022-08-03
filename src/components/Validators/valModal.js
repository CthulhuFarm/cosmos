import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import Body from './body';

const ValModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch modal
        </Button>
  
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header className="bg-primary" closeButton>
            <Modal.Title>Select a Chain</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            <div className="row mb-1">
                <div className="col-lg-6 px-4">
                    <div className="text-center border" >
                        <img src="../../../m0.png" />
                    </div>
                </div>
                <div className="col-lg-6 px-4">
                    <div className="text-center border" >
                        <img src="../../../m0.png" />
                    </div>
                </div>
            </div>
            <Body />
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default ValModal;