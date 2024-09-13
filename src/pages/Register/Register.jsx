import React from 'react'
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Select from 'react-select';
import './Register.css'

const Register = () => {

 // status optios
 const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];


  return (
    <div>

            <div className='container-register card  mt-4  py-4'>
                <Form className='px-4 '>
                    <Row>
                        <Card.Title className=' text-center'>Registration Form</Card.Title>
                      <hr/>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" name='fname' placeholder='Enter FirstName' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name='lname' placeholder='Enter LastName' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder='Enter Email' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" name='mobile' placeholder='Enter Mobile' />
                        </Form.Group>


                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label> Select Your Gender</Form.Label>

                            <Form.Check
                                type={"radio"}
                                label={`Male`}
                                name="gender"
                                value={"Male"}
                            />

                            <Form.Check
                                type={"radio"}
                                label={`Female`}
                                name='gender'
                                value={'Female'}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>Select Your Status</Form.Label>
                            <Select options={options} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>Select Your Profile</Form.Label>
                            <Form.Control type="file" name='user_profile' placeholder='Select Your Profile' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Label>Enter Your Location</Form.Label>
                            <Form.Control as="textarea"  type="text" name='location' placeholder='Enter Your Location' />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Row>

                </Form>
            </div>


        </div>
  )
}

export default Register