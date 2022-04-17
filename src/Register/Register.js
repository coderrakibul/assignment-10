import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Register.css';




const Register = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    if (user) {
        navigate('/checkout')
    }

    return (
        <div className='form-container container d-block mt-5 mb-5 align-items-center'>
            <Form onSubmit={handleSubmit} className='register-form'>
                <h1 className='text-center mb-5 fw-bold '>Please Register</h1>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div>
                    <p>Already have an accout? <Link className="text-decoration-none fw-bold ms-2" to='/login'>Login</Link> </p>
                </div>

                <div className='d-flex justify-content-center'>
                    <Button variant="primary" type="submit" className='me-2'>
                        Register
                    </Button>

                    <Button onClick={() => signInWithGoogle()} variant="primary" type="submit" className='ms-2'>
                        Sign In With Google
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Register;