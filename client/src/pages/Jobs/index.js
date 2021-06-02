import React from 'react';
import JobsTable from '../../components/JobsTable';
import AddJobBtn from '../../components/AddJobBtn';
import {Col, Row} from 'react-bootstrap';



const Jobs = () =>  {

    return (
        <>
                <Row>
                    <Col xs={3}></Col>
                    <Col xs={6}><JobsTable/></Col>
                    <Col xs={3}><AddJobBtn/></Col>
                </Row>
        </>
    )
};

export default Jobs