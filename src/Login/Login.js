import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='form-container container d-block mt-5 mb-5 align-items-center'>
            <Form className='register-form'>
                <h1 className='text-center mb-4 fw-bold mb-5 '>Please Login</h1>


                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div>
                    <p>Not accout? <Link className="text-decoration-none fw-bold ms-2" to='/register'>Create account</Link> </p>
                </div>

                <Button className='d-block mx-auto' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;