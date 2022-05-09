import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import profile from '../../images/about/profile.png';
import './About.css';

const About = () => {
    return (
        <div id="about" className='about-section text-center mx-auto mt-5'>
            <PageTitle title="About"></PageTitle>
            <h1>This is about</h1>

            <div class="card-group text-center px-2 mt-5">
                <div class="card ms-5 shadow-lg bg-white">
                    <img class="card-img-top " src={profile} alt="" />
                    <div class="card-body">
                        <h3 class="card-title">Ahamed Jamal</h3>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">CEO & Founder</small></p>
                    </div>
                </div>
                <div class="card ms-5 shadow-lg bg-white">
                    <img class="card-img-top" src={profile} alt="" />
                    <div class="card-body">
                        <h3 class="card-title ">Nizam Uddin</h3>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Director</small></p>
                    </div>
                </div>
                <div class="card ms-5 shadow-lg bg-white">
                    <img class="card-img-top" src={profile} alt="" />
                    <div class="card-body">
                        <h3 class="card-title px-1">Noor Mohammad</h3>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Manager</small></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
