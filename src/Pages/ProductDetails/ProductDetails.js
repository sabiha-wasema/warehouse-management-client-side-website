import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {


    const { productId } = useParams();
    return (
        <div>
            <h2>Welcome to detail: {productId}</h2>

            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-dark'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;