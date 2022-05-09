import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const Checkout = () => {
    const { productId } = useParams();
    const [product] = useProducts(productId);
    const [user] = useAuthState(auth);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            product: product.name,
            productId: productId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is successfully booked!!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {product.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" placeholder='product' required />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="number" name="phone" placeholder='phone' required />
                <br />

                <input className='btn btn-dark text-center' type="submit" value="Place Order" />

            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;