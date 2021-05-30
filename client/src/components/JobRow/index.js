import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import JobForm from '../JobForm';



function JobRow (props) {

    const jobList= props.jobData;

    const [formShow, setFormShow] = useState(false);


    return (
            <>
                {jobList.map(job => 
                    <tr key={job.id}>
                        <td>{job.id}</td>
                        <td>{job.title}</td>
                        <td>{job.salary}</td>
                        <td>{job.job_type.name}</td>
                        <td>{job.department.name}</td>
                        <td>
                            <Button variant="primary" onClick={() => setFormShow(true)}>
                                Edit
                            </Button>
                            <JobForm
                                show={formShow}
                                onHide={() => setFormShow(false)}
                                backdrop="static"
                                title={job.title}
                                id={job.id}
                                responsibilities={job.responsibilities}
                            />
                        </td>
                    </tr>

                )}
            </>
    )
}

export default JobRow
