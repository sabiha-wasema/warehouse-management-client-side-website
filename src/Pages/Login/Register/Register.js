import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (name && email && password && password.length >= 6) {
            await createUserWithEmailAndPassword(email, password);
            // setDisplayName(name);
            await updateProfile({ displayName: name });
            console.log('updated profile');
            navigate('/home');
        }

        else {
            toast.error('Password must be at least 6 characters long');
            return;
        }
    }

    return (
        <div className='register-form container w-50 mx-auto shadow-lg p-3 mb-4 bg-body rounded mt-5'>
            <PageTitle title="Register"></PageTitle>
            <h2 className='text-dark mb-4 text-center mt-2 form-title'>Please Register</h2>
            <hr className="w-25 mx-auto" style={{ color: "#F98080", height: "2px" }} />
            <form className=' my-4 w-75 mx-auto' onSubmit={handleRegister}>
                <div>
                    <label><h6 className='mt-2 fst-italic fw-bold'>Your Name</h6></label>
                    <input type="text" name="name" id="name" placeholder='Your Name' />
                </div>
                <div>
                    <label><h6 className='mt-2 fst-italic fw-bold'>Email address</h6></label>
                    <input type="email" name="email" id="email" placeholder='Email Address' required />

                </div>
                <div>
                    <label><h6 className='mt-2 fst-italic fw-bold'>Password</h6></label>
                    <input type="password" name="password" id="password" placeholder='Password' required />
                </div>
                <div className=" text-muted">
                    <p className='info-text'>We'll never share your details with anyone else.</p>
                </div>

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms"> Accept Our Terms And Conditions</label>

                <input
                    disabled={!agree}
                    className='form-btn btn px-5 my-3 text-uppercase fs-6 text-center fst-italic btn-dark text-white w-50 d-block mx-auto'
                    type="submit"
                    value="Register" />
            </form>
            <div className='text-center d-grid gap-2 w-75 mx-auto'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Register;