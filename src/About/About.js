import React from 'react';
import profile from '../images/profile.jpg';
import './About.css'

const About = () => {
    return (
        <div className='container mb-5 mt-5'>
            <h1 className='text-center'>Md Rakibul Islam</h1>
            <div className='image-container mb-4'>
                <img className='profile-image' src={profile} alt="" />
            </div>
            <p>Hello, I am Rakibul Islam. I want to be a web developer. Now I am on this mission. First of all, I want to be a perfect developer. Then I will build my career in it. My current goal is to establish myself as a developer. Whether it is inside the country or outside the country. I believe nothing is impossible. Of course it is possible if you stick to it and try your best. That's what I'm doing now. And I will not give up until I am success. </p>
        </div>
    );
};

export default About;