import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';


const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();


const handleSubmit = (event) => {
    event.preventDefault();
}

if(user){
    navigate('/checkout')
}
    return (
        <div className='form-container container d-block mt-5 mb-5 align-items-center'>
            <Form onSubmit={handleSubmit} className='register-form'>
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

                <div className='d-flex justify-content-center'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                    <Button onClick={() => signInWithGoogle()} variant="primary" type="submit" className='ms-2'>
                        Sign In With Google
                    </Button>
                </div>


            </Form>
        </div>
    );
};

export default Login;