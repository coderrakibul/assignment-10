import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, price, description, image } = props.service
    return (
        <div>
            <Card className='service-card shadow p-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>${price}</Card.Title>
                    <Card.Text className='mb-5'>
                        {description}
                    </Card.Text>
                    <Button className='checkout-btn w-75' variant="primary">Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;