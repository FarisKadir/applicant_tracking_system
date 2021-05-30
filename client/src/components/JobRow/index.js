import React, {useState, useEffect} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';



function JobRow (props) {

    const job = props.jobData;
  

    const [show, setShow] = useState(false);

    const handleClose = () => {
        
        return setShow(false)
    };

    const handleShow = () => {setShow(true)};

    return (
        <>
        <tr key={job.id} onClick={() => setShow(true)}>
            <td>
                {job.id}
            </td>
            <td>
                {job.title}
            </td>
            <td>
                {job.salary}
            </td>
            <td>
                {job.job_type.name}
            </td>
            <td>
                {job.department.name}
            </td>
        </tr>
        <Modal
            show={show}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            key={job.id}
        >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {job.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formDept">

                        </Form.Group>
                    </Form>
                    <h5>Id: {job.id}</h5><br/>

                    <h5>Required Qualifications</h5>
                    <p>{job.requiredQualifications}</p>
                    <h5>Preferred Qualifications</h5>
                    <p>{job.preferredQualifications}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mb-1" variant="primary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleShow}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default JobRow
