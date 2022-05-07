import React from 'react';
import tryagain from '../../../images/tryagain.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container w-500 mx-auto'>
            <h2 className='text-dark text-center my-4'>Not Found.Please Try Again</h2>
            <div className='w-50 mx-auto'>
                <img className=' w-100' src={tryagain} alt="" />
            </div>

        </div>
    );
};

export default NotFound;