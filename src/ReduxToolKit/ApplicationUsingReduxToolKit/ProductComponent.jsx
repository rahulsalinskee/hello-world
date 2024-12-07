import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

/* ***** Both are same! ***** */
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function ProductComponent() {
    const [products, setProducts] = useState([]);
    const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        // api
        axios.get(PRODUCT_API_URL).then((response) => {
            console.log(response.data);
            setProducts(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const cards = products.map((product) => {
        return (
            <div key={product.id} className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                <Card style={{ width: '18rem', padding: '1rem', height: 'auto', gap: '1rem', marginBottom: '1rem' }}>
                    <Card.Img variant="top" src={product.image} style={{ height: '15rem' }} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>INR. {product.price}</Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: 'white' }}>
                        <Button variant="primary">Add</Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    });

    return (
        <>
            <div>
                <h3>Product Dashboard</h3>
                <div className='row'>
                    {cards}
                </div>
            </div>
        </>
    );
}
