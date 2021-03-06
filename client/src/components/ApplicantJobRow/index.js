import React, {useState} from 'react';
import { Button, Modal} from 'react-bootstrap';
import ApplyForm from '../ApplyForm';




function ApplicantJobRow (props) {

    const job = props.jobData;

    const index = props.kpbIndex + 1;
  

    const [show, setShow] = useState(false);

    const handleClose = () => {
        
        return setShow(false)
    };

    const handleShow = () => {setShow(true)};

    return (
        <>
        <tr key={index} onClick={handleShow}>
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
            key={index + " modal"}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3><strong>{job.title}</strong></h3>
                    <h5>Job Id: {job.id}</h5>
                </Modal.Title>
                <Button className="m-1" variant="primary" onClick={handleClose}>Close</Button>
            </Modal.Header>
            <Modal.Body>
               <ApplyForm key={index+"Form"} jobInfo={job} handleClose={handleClose}/>
            </Modal.Body>
            <Modal.Footer>
            
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ApplicantJobRow
