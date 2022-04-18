import React, { useState } from 'react';
import './Checkout.css';
import auth from '../firebase.init';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';

const Checkout = () => {
    const [email, setEmail] = useState('');
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }
    return (
        <div className='container text-center checkout-container mt-5'>
            <h1>This is checkout page</h1>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Please verify your email
            </button>
        </div>
    );
};

export default Checkout;