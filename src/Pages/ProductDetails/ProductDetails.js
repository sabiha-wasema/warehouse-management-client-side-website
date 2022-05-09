import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import useProducts from '../../Hooks/useProducts';
import AddProduct from '../AddProduct/AddProduct';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    // const [product] = useProducts(productId);


    return (
        <div>
            <div className=' container mx-auto w-50 mb-2 mt-4 product shadow-lg p-3 bg-white rounded-4'>

                <img className='img-part' src={product.picture} alt="" />
                <p>Id: {productId}</p>
                <h2 className='font-italic'>{product.name}</h2>
                <p className=''>Price: ${product.price}</p>
                <p className=' fs-6'><small>{product.description}</small></p>
                <p>Quantity:  <span className='item-quantity'>{
                    product.quantity ? product.quantity : "Sold out"
                }
                </span>
                </p>
                <p>Supplier Name: {product.supplier}</p>
                <button className='px-4 py-2 bg-danger rounded '>Delivered</button>
            </div>
            <div className='text-center mt-5'>
                <AddProduct></AddProduct>
                {/*  <Link to="/addproduct">
                    <AddProduct></AddProduct>
                </Link>  */}
                <div className="mt-4  text-center">
                    <div className='mb-2'>
                        <Link to={`/checkout/${productId}`}>
                            <button className='btn btn-dark'>Proceed Checkout</button>
                        </Link>
                    </div>

                    <div >
                        <Link to="/manageproduct">
                            <button className='btn btn-dark'>Manage Product</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;