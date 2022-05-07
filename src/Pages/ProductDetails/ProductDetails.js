import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div>
            <div className='container w-50 mx-auto mb-4 mt-4 product shadow-lg p-3 mb-3 bg-white rounded-4'>
                <img className='img-part' src={product.picture} alt="" />
                <h2 className='font-italic'>{product.name}</h2>
                <p className=''>Price: ${product.price}</p>
                <p className=' fs-5'><small>{product.description}</small></p>
                <p>Quantity: <span className='item-quantity'>{product.quantity}</span></p>
                <p>Supplier Name: {product.supplier}</p>
            </div>

            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-dark'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;