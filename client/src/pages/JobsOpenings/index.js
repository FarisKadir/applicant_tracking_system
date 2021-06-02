import React, {useState, useEffect} from 'react';
import ApplicantJobsTable from '../../components/ApplicantJobsTable';
import AdminJobsTable from '../../components/AdminJobsTable';
import AddJobBtn from '../../components/AddJobBtn';
import { Container, Col, Row } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";



const Jobs = () =>  {

    const {user, isAuthenticated} = useAuth0();

    const [isAdmin, setIsAdmin] = useState();

    useEffect(() => {
        if (user.[`http://www.user.app_role`]) {

            
           setIsAdmin(true)
        }
    },[user, isAuthenticated])
    

    if (isAdmin)  {
        return (
            <Container className="m-3">
                <Row className="mb-3">
                    <Col className="offset-md-5" xs={6}><AddJobBtn/></Col>
                </Row>
                <Row>
                    <Col className="offset-md-5" xs={6}><AdminJobsTable/></Col>
                </Row>
            </Container>
        )
    } {
        return (
            <Container className="m-3">
                <Row>
                    <Col className="offset-md-5" xs={6}><ApplicantJobsTable/></Col>
                </Row>
            </Container>
        )
    }
    

    
};

export default Jobs