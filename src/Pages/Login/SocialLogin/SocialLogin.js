import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
        // navigate('/checkout');
    }

    return (
        <div className='mx-auto w-50 d-block'>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='line'></div>
                <p className='mt-2 px-3'> or </p>
                <div style={{ height: '1px' }} className='line'></div>
            </div>
            {errorElement}
            <div className='d-grid gap-2 w-75 mx-auto text-center pb-4 social-btn'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-dark btn-next mx-auto d-block my-2 p-2'>
                    <img style={{ width: '20px' }} src={google} alt="" />
                    <span className='px-2'>Google SignIn</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-dark btn-previous mx-auto d-block'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github SignIn</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;