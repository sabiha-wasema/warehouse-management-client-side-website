import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, picture, description, price, quantity, supplier } = product;
    const navigate = useNavigate();

    const navigateToProductDetails = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='product shadow-lg px-2 text-center mb-3 bg-white rounded-3'>
            <PageTitle title="Product"></PageTitle>
            <img className='img-part px-5 py-3' src={picture} alt="" />
            <h2 className='font-italic'>{name}</h2>
            <p className=''>Price: ${price}</p>
            <p className='fs-5 px-3'><small>{description}</small></p>
            <p>Quantity: <span className='item-quantity'>{quantity}</span></p>
            <p>Supplier Name: {supplier}</p>
            <button onClick={() => navigateToProductDetails(_id)} className='btn btn-dark mb-3 px-3'>Update</button>
        </div>
    );
};

export default Product;