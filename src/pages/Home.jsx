import React, { useEffect, useRef } from 'react';
import "./Home.css";
import linkedinImage from './images/linkedin.png';
import githubImage from './images/github.png';
import professionalPhoto from './images/professional_photo2.PNG';


const Home = () => {

    return (
       <div>
            <div className='topBar'>
                <div className='linkedinLink'> 
                    <a href="https://www.linkedin.com/in/william-boytinck-b1140b1b1/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImage} alt='????' />
                    </a>
                </div>
                <div className='githubLink'> 
                    <a href="https://github.com/Will-Boytinck" target="_blank" rel="noopener noreferrer">
                        <img src={githubImage} alt='????' />
                    </a>
                </div>
            </div>
            <div className='personalPicture'>
                <img src={professionalPhoto} alt='????' />
            </div>
       </div>
    );

}

export default Home;

