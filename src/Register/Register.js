import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Register.css'

const Register = () => {



    return (
        <div className='form-container container d-block mt-5 mb-5 align-items-center'>
            <Form className='register-form'>
            <h1 className='text-center mb-4 fw-bold '>Please Register</h1>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              
                <Button className='d-block mx-auto' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;