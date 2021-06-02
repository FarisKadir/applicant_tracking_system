import React, {useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Form, FormControl, InputGroup, Button, Container, Row, Col, Image } from 'react-bootstrap';
import {API} from '../../utils/API';


const Profile = () => {


  const {user, isAuthenticated} = useAuth0();



  //This state helps to load the profile only if the data has been loaded.

  const [isLoaded, setIsLoaded] = useState(false);


  //This is the state of the userInfo that is in the local database
  const [userInfo, setUserInfo] = useState({
    id: '',
    external_id_provider: '',
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    role_id: '',
    role_name: '',
    resume_path: '',
    profile_pic: ''
  });


  useEffect(() => {
    if (isAuthenticated) {
      const auth0Id = user.sub.split("|",2)[1];

      API.getData(`users/${auth0Id}`)
        .then(res => {
          setUserInfo(res.data);
          setIsLoaded(true);
        })
    }
  },[user, isAuthenticated])


  const handleOnChange = (e) => {
    const key = e.target.id;
        const value = e.target.value;

        setUserInfo({
            ...userInfo,
            [key]: value
        });
  };


  const handleSubmit = (e) => {
    API.updateData(`users/${userInfo.id}`, userInfo)
      .then(res => console.log("User information was updated"))
      .catch(err => console.log("User information was not updated"))
  };


  const handleUndo = (e) => {
    const auth0Id = user.sub.split("|",2)[1];

    API.getData(`users/${auth0Id}`)
        .then(res => {
          setUserInfo(res.data);
        })
  }

  return isLoaded ?  (<Container>
    <Row className="col-md-6 offset-md-3 mt-5 mb-5">
      <Col><Image src={userInfo.profile_pic} alt={userInfo.name} roundedCircle/></Col>
    </Row>
    <Row>
      <Col className="col-s-12 offset-md-3 col-md-6">
        <Form>
          <InputGroup className="mb-2">
            <InputGroup.Text>First Name</InputGroup.Text>
            <FormControl id="first_name" value={userInfo.first_name} onChange={handleOnChange} />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text>Last Name</InputGroup.Text>
            <FormControl id="last_name" value={userInfo.last_name} onChange={handleOnChange} />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text>Phone: </InputGroup.Text>
            <FormControl id="phone" value={userInfo.phone} onChange={handleOnChange} />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text>Email: </InputGroup.Text>
            <FormControl id="email" value={userInfo.email} onChange={handleOnChange} />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text>Street Address: </InputGroup.Text>
            <FormControl id="address" value={userInfo.address} onChange={handleOnChange} />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text>City: </InputGroup.Text>
            <FormControl id="city" value={userInfo.city} onChange={handleOnChange} />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text>State: </InputGroup.Text>
            <FormControl id="state" value={userInfo.state} onChange={handleOnChange} />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text>Zip: </InputGroup.Text>
            <FormControl id="zip" value={userInfo.zip} onChange={handleOnChange} />
          </InputGroup>
          <Form.Group controlId="resumeFile" className="mb-2">
            <InputGroup.Text>Upload Resume: </InputGroup.Text>
            <Form.File id="resume" className="m-1" custom/>
          </Form.Group>
        </Form>
        <Button className="m-1" onClick={handleSubmit}>Update Profile</Button>
        <Button className="m-1" onClick={handleUndo}>Undo Changes</Button>
      </Col>
    </Row>
  </Container>) : <Container><Row><Col className="offset-md-4"><h1>Loading Data....</h1></Col></Row></Container>
}

export default Profile