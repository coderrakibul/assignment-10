import React, { useEffect, useState } from 'react';
import banner from '../images/banner.webp';
import Service from '../Service/Service';
import './Home.css'


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='mb-5'>
            <img className='w-100 banner-img mb-5' src={banner} alt="" />

            <h2 className='text-center mb-4 mt-5'>My Services</h2>
            <div className='container service-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Home;