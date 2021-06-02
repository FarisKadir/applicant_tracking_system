import React, {useState} from 'react';
import { Button, Modal} from 'react-bootstrap';
import JobForm from '../JobForm';
import JobSubmissions from '../JobSubmissions';



function AdminJobRow (props) {

    const index = props.jobIndex + 1;
  
    //This handles the showing of the jobs in the Modal
    const job = props.jobData;
    const [jobShow, setJobShow] = useState(false);

    const handleJobClose = () => {
        
        return setJobShow(false)
    };

    const handleJobShow = () => {setJobShow(true)};


    //This handles the showing of the submissions in the Modal
    const sub = props.jobData.submissions;

    const [subShow, setSubShow] = useState(false);

    const handleSubClose = () => {
        
        return setSubShow(false)
    };

    const handleSubShow = () => {setSubShow(true)};
    

    return (
        <>
        <tr key={index}>
            <td onClick={handleJobShow}>
                {job.id}
            </td>
            <td onClick={handleJobShow}>
                {job.title}
            </td>
            <td onClick={handleJobShow}>
                {job.salary}
            </td>
            <td onClick={handleJobShow}>
                {job.job_type.name}
            </td>
            <td onClick={handleJobShow}>
                {job.department.name}
            </td>
            <td>{job.submissions.length}</td>
            <td><Button className="btn btn-sm" onClick={handleSubShow}>View Submissions</Button></td>
        </tr>
        <Modal
            show={jobShow}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            key={index + " job"}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3><strong>{job.title}</strong></h3>
                    <h5>Job Id: {job.id}</h5>
                </Modal.Title>
                <Button className="m-1" variant="primary" onClick={handleJobClose}>Close</Button>
            </Modal.Header>
            <Modal.Body>
               <JobForm key={index+"JobForm"} jobInfo={job} handleClose={handleJobClose}/>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        <Modal
            show={subShow}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            key={index + " sub"}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3><strong>{job.title}</strong></h3>
                    <h5>Job Id: {job.id}</h5>
                </Modal.Title>
                <Button className="m-1" variant="primary" onClick={handleSubClose}>Close</Button>
            </Modal.Header>
            <Modal.Body>
               <JobSubmissions key={index+"SubForm"} subInfo={sub} handleClose={handleSubClose}/>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AdminJobRow
