import MySubmissionsTable from '../../components/MySubmissionsTable';
import { Container, Col, Row } from 'react-bootstrap';




const MySubmissions = () =>  {

        return (
            <Container className="m-3">
                <Row>
                    <Col className="offset-md-5" xs={6}><MySubmissionsTable/></Col>
                </Row>
            </Container>
        )
    };
    

    


export default MySubmissions