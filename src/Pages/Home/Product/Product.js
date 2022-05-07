import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Product.css';

const Product = ({ product }) => {
    const { id, name, picture, description, price, quantity, supplier } = product;
    const navigate = useNavigate();
    const navigateToProductDetails = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='product shadow-lg p-3 mb-3 bg-white rounded-4'>
            <PageTitle title="Product"></PageTitle>
            <img className='img-part' src={picture} alt="" />
            <h2 className='font-italic'>{name}</h2>
            <p className=''>Price: ${price}</p>
            <p className='text-primary fs-5'><small>{description}</small></p>
            <p>Quantity: <span className='item-quantity'>{quantity}</span></p>
            <p>Supplier Name: {supplier}</p>
            <button onClick={() => navigateToProductDetails(id)} className='btn btn-dark mb-3 px-3'>Update</button>
        </div>
    );
};

export default Product;