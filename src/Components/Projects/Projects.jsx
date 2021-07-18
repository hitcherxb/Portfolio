import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Projects.css'

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
        </div>
    );
}

export default Projects;