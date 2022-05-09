import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="products" className='w-75 mx-auto'>

            <div className="row">
                <PageTitle title="Products"></PageTitle>
                <h1 className='text-dark text-center mt-5 mb-5'> Our Products</h1>
                <div className="products-container">
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
                <div className="text-center mt-4">
                    <Link to="/manageproduct">
                        <button className='btn btn-dark'>Manage Product</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;