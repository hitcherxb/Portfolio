import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import profilePic from '../Pictures/AboutMePic.JPG'
import './AboutMe.css'
import { Button } from '@material-ui/core'

function AboutMe(props) {
    return (
        <div>
            <Navbar />
            <div id='body'>
                <div id='text'>
                    <h1>Hi, I’m Cody and I’m a front-end developer with experience in React.js...</h1>
                    <p>I am an Ironhack Miami graduate. I learned front and backend development (MERN Stack)</p>
                    <p>I have 4 years of experience in Information Technology and wanted to adventure out and learn more. I decided to join Ironhack and fell in love with building my own environment and the endless amount of things you can make. Since then I have been constantly learning and growing a bigger interest in Web and Software Devleopment.</p>
                </div>
                <div id='picture'>
                    <img src={profilePic} alt='profilePic' />
                </div>
            </div>
            <div id='contactButton'>

                <h1>Contact Me</h1>

                <Button component={Link} to="/Contact" variant='outlined'>Get in touch</Button>

            </div>

            <Footer />
        </div>
    );
}

export default AboutMe;