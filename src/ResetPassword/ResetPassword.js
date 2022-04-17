import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './ResetPassword.css'

const ResetPassword = () => {

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
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
        <div className='container w-50 reset-password-container'>
            <form className='mt-5'>
                <input className='d-block mx-auto w-100 mb-3' type="email" name="email" id="" onChange={(event) => setEmail(event.target.value)}/> 
                <button  onClick={async () => {
          await sendPasswordResetEmail(email);
          alert('Sent email');
        }} type="submit" className='btn btn-primary d-block mx-auto'>Reset password</button>
            </form>
        </div>
    );
};

export default ResetPassword;