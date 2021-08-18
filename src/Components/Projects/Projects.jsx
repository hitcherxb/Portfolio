import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Projects.css'
import BucketList from '../Pictures/bucketList.png'
import NightFly from '../Pictures/niteFly.png'
import { Icon } from '@iconify/react';
import bxlReact from '@iconify/icons-bx/bxl-react';
import htmlIcon from '@iconify/icons-dashicons/html';
import bxsFileCss from '@iconify/icons-bx/bxs-file-css';
import { Button } from '@material-ui/core'
import { StylesProvider } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Footer from '../Footer/Footer'
import PortfolioProject from '../Pictures/portfolioProject.png'

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

            <div id='myProjects'>
                <h2>My Projects</h2>
                <hr></hr>
            </div>

            {/* Project 1 */}
            <div id='project'>
                <div id='projectRow'>
                    <div id='projectInfo'>
                        <h1>Bucket List</h1>
                        <p>A simple website that allows you to blog about your bucketlist accomplishments on your own profile.</p>
                        <div id='projectLanguages'>
                            <div id='centerR'><Icon className='iconSize' icon={bxlReact} style={{ fontSize: '36px' }} /> React</div>
                            <div id='centerC'><Icon className='iconSize' icon={bxsFileCss} style={{ fontSize: '36px' }} /> CSS</div>
                            <div id='centerH'><Icon className='iconSize' icon={htmlIcon} style={{ fontSize: '36px' }} /> HTML</div>
                        </div>
                        <div >
                            <div id='projectLinks'>
                                <StylesProvider injectFirst>
                                    <div>
                                        <Button variant='outlined' className='liveButton' href="https://bucket-list-app.netlify.app">View site <OpenInNewIcon /></Button>
                                    </div>
                                    <div>
                                        <Button variant='outlined' className='gitButton' href="https://github.com/hitcherxb/Bucket-List">View code <GitHubIcon /></Button>
                                    </div>
                                </StylesProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='picture'>
                    <img src={BucketList} alt='BucketList' />
                </div>
            </div>

            {/* Project 2 */}
            <div id='project2'>
                <div id='projectRow2'>
                    <div id='projectInfo2'>
                        <h1>Night Fly</h1>
                        <p>A website that allows you to blog about your bucketlist accomplishments on your own profile.</p>
                        <div id='projectLanguages2'>
                            <div className='centerR'><Icon ClassName='iconSize' icon={bxlReact} style={{ fontSize: '36px' }} /> React</div>
                            <div className='centerC'><Icon ClassName='iconSize' icon={bxsFileCss} style={{ fontSize: '36px' }} /> CSS</div>
                            <div className='centerH'><Icon ClassName='iconSize' icon={htmlIcon} style={{ fontSize: '36px' }} /> HTML</div>
                        </div>
                        <div >

                            <div id='projectLinks2'>
                                <StylesProvider injectFirst>
                                    <div>
                                        <Button variant='outlined' className='liveButton' href="https://nite-fly.netlify.app/">View site <OpenInNewIcon /></Button>
                                    </div>
                                    <div>
                                        <Button variant='outlined' className='gitButton' href="https://github.com/hitcherxb/NiteFly">View code <GitHubIcon /></Button>
                                    </div>
                                </StylesProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='picture'>
                    <img src={NightFly} alt='Night Fly' />
                </div>
            </div>

            {/* Project 3 */}
            <div id='project3'>
                <div id='projectRow3'>
                    <div id='projectInfo3'>
                        <h1>Portfolio Project</h1>
                        <p>Main objective for this project was to work with the UX/UI team on creating a portfolio for a fake person. My job in this was to work on the about page and make it responsive for the phone view as well. I created an easter egg on the page using JavaScript causing the whole page to change as well.</p>
                        <div id='projectLanguages3'>
                            <div className='centerR'><Icon ClassName='iconSize' icon={bxlReact} style={{ fontSize: '36px' }} /> React</div>
                            <div className='centerC'><Icon ClassName='iconSize' icon={bxsFileCss} style={{ fontSize: '36px' }} /> CSS</div>
                            <div className='centerH'><Icon ClassName='iconSize' icon={htmlIcon} style={{ fontSize: '36px' }} /> HTML</div>
                        </div>
                        <div >

                            <div id='projectLinks3'>
                                <StylesProvider injectFirst>
                                    <div>
                                        <Button variant='outlined' className='liveButton' href="https://jonny-vanessen.github.io/PatTheRefiner/index.html">View site <OpenInNewIcon /></Button>
                                    </div>
                                    <div>
                                        <Button variant='outlined' className='gitButton' href="https://github.com/hitcherxb/PatTheRefiner">View code <GitHubIcon /></Button>
                                    </div>
                                </StylesProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='picture'>
                    <img src={PortfolioProject} alt='Portfolio Project' />
                </div>
            </div>

            <Footer />
        </div >
    );
}

export default Projects;