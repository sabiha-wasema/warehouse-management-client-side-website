import React from 'react';
import tryagain from '../../../images/tryagain.png';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='container w-50 mx-auto p-5'>
            <h2 className='text-dark text-center my-4'>Not Found.Please Try Again</h2>
            <div className='container d-flex justify-content-center align-items-center'>
                <img onClick={() => navigate(`/home`)} className='img-fluid img-thumbnail shadow-lg m-5 p-md-5' src={tryagain} alt="" />
            </div>

        </div>
    );
};

export default NotFound;