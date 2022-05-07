import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner d-flex align-items-center'>
            <div className="container banner-text d-flex flex-column text-white px-5">
                <h1>Welcome to <span>Gauche Fruit Center</span></h1>
                <p> Find here different types of fruit in your budget. </p>
            </div>
        </div>
    );
};

export default Banner;