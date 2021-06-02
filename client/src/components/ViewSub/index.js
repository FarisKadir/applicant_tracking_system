import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Form, Col } from 'react-bootstrap';
import {API} from '../../utils/API';

export default function ViewSub (props) {


    const {user} = useAuth0();

    const auth0Id = user.sub.split("|",2)[1];
    const jobInfo = props.jobInfo;
   

    //this will delete the job from the database.
    const handleSubmit = (e) => {
        props.handleClose();

        API.createData(`submissions`,
        [{
            user_id: auth0Id,
            job_id: jobInfo.id
        }]) 
        .then(res => (
            console.log("application submitted")
        ))
        .catch(err => console.log(err) );
    };




    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>
                       <h5><strong>Department</strong></h5>
                    </Form.Label>
                    <Col>
                        <Form.Control readOnly defaultValue={jobInfo.department.name}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                       <h5><strong>Job Type</strong></h5>
                    </Form.Label>
                    <Col>
                        <Form.Control readOnly defaultValue={jobInfo.job_type.name}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                       <h5><strong>Responsibilities</strong></h5>
                    </Form.Label>
                    <Col>
                        <Form.Control readOnly defaultValue={jobInfo.responsibilities}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                       <h5><strong>Required Qualifications</strong></h5>
                    </Form.Label>
                    <Col>
                        <Form.Control readOnly defaultValue={jobInfo.requiredQualifications}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                       <h5><strong>Preferred Qualifications</strong></h5>
                    </Form.Label>
                    <Col>
                        <Form.Control readOnly defaultValue={jobInfo.preferredQualifications}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                       <h5><strong>Salary</strong></h5>
                    </Form.Label>
                    <Col>
                        <Form.Control readOnly defaultValue={jobInfo.salary}></Form.Control>
                    </Col>
                </Form.Group>
            </Form>
        </>
        );
};