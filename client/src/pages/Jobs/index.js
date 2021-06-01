import React from 'react';
import JobsTable from '../../components/JobsTable';
import AddJobBtn from '../../components/AddJobBtn';
import {Container, Col, Row} from 'react-bootstrap';



const Jobs = () =>  {

    return (
        <>
                <Row>
                    <Col></Col>
                    <Col xs={6}><JobsTable/></Col>
                    <Col><AddJobBtn/></Col>
                </Row>
        </>
    )
};

export default Jobs