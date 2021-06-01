import React, {useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import JobForm from '../JobForm';

export default function AddJobBtn (props) {

    const [show, setShow] = useState(false);

    const handleShow = () => {setShow(true)};

    const handleClose = () => {setShow(false)};

    
    return (
        <>
            <Button onClick={handleShow}>Add a new job</Button>
                    <Modal
                show={show}
                backdrop="static"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3><strong>Add a new job</strong></h3>
                    </Modal.Title>
                    <Button className="m-1" variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Header>
                <Modal.Body>
                <JobForm handleClose={handleClose}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}