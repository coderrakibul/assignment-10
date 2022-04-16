import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className='bg-dark text-light text-center p-3'>
            <p>Copyright &copy; All Rights Are Reserved</p>
            {year}
        </div>
    );
};

export default Footer;