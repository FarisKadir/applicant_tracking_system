import React from 'react';
import JobsTable from '../../components/JobsTable';
import AddJobBtn from '../../components/AddJobBtn';
import { Container, Col, Row } from 'react-bootstrap';



const Jobs = () =>  {

    return (
        <Container className="m-3">
            <Row className="mb-3">
                <Col className="offset-md-5" xs={6}><AddJobBtn/></Col>
            </Row>
            <Row>
                <Col className="offset-md-5" xs={6}><JobsTable/></Col>
            </Row>
        </Container>
    )
};

export default Jobs