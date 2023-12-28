import React, { useEffect, useRef } from 'react';
import "./Home.css";
import linkedinImage from './images/linkedin.png';
import githubImage from './images/github.png';
import professionalPhoto from './images/professional_photo2.PNG';
import { Link, Element, scroller } from "react-scroll";

// TODO: get smooth scrolling working when I actually have content here
// https://medium.com/@davidarmah2022/silky-smooth-scrolling-in-reactjs-a-step-by-step-guide-for-react-developers-7dcce944cc89
// https://codepen.io/Mertl/pen/GexapP

const Home = () => {

    return (
       <div>
            <canvas id="canvas"></canvas>
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
            <div className='sectionLinks'>
                <div>
                    <Link
                        to="section1"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Experience
                    </Link>
                </div>
                <div>
                    <Link
                        to="section2"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Skills
                    </Link>
                </div>
                <div>
                    <Link
                        to="section3"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Projects
                    </Link>
                </div>
            </div>
            <Element name="section1" className="section">
                <h2>Experience</h2>
                <div className='sectionOne'>Stuff here...</div>
            </Element>
            <Element name="section2" className="section">
                <h2>Skills</h2>
                <p>Stuff here...</p>
            </Element>
            <Element name="section3" className="section">
                <h2>Projects</h2>
                <p>Stuff here...</p>
            </Element>
       </div>
    );

}

export default Home;

