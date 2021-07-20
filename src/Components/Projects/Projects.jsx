import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Projects.css'
import BucketList from '../Pictures/bucketList.png'
import NightFly from '../Pictures/niteFly.png'

function Projects(props) {
    return (
        <div>
            <Navbar />
            <header>
                <div id='project-top'>
                    <h1>Projects</h1>
                    <p>Check out several of my select projects below. I specialize in React and JavaScript.</p>
                </div>
            </header>
            <div id='project-1'>
                <img src={BucketList} alt='Bucket List' />
                <div>Bucket List</div>
            </div>
            <div id='project-2'>
                <img src={NightFly} alt='Night Fly' />
                <div>Night Fly</div>
            </div>
            <div id='project-3'>
                <img src={BucketList} alt='Bucket List' />
                <div>Bucket List</div>
            </div>
        </div>
    );
}

export default Projects;