import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const JobForm = (props) => {

    //const job = props.jobData;
    const onHide = props.onHide;
    console.log(props.id);

    return (
        <Modal
            show={props.show}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.title} - {props.id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Preferred Qualifications</h4>
                <p>
                {props.responsibilities}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={onHide}>Submit</Button>
            </Modal.Footer>
        </Modal>
        )
}

export default JobForm
