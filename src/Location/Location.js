import React from 'react';
import location from '../images/location.png';

const Location = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Visit Our Location</h2>
            <div className='mt-4 d-flex justify-content-center w-100'>
                <img className='w-75' src={location} alt="" />
            </div>
        </div>
    );
};

export default Location;