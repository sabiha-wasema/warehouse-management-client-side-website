import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    // console.log(user);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // console.log(user);
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center my-5 mx-auto w-50'>
            <h3 className="text-danger">Your Email is not Verified!!</h3>
            <h5 className='text-success'>Please Verify Your Email Address</h5>
            <button className='btn btn-dark'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;