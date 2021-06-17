import React from 'react';
import './Home.css';
import { Icon, InlineIcon } from '@iconify/react';
import bxlReact from '@iconify/icons-bx/bxl-react';
import htmlIcon from '@iconify/icons-dashicons/html';
import bxsFileCss from '@iconify/icons-bx/bxs-file-css';
import javascriptIcon from '@iconify/icons-cib/javascript';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import profilePic from '../Pictures/me.png'
import bucketList from '../Pictures/bucketList.png'
import { Button } from '@material-ui/core'







function Home(props) {

    return (
        <div>
            <div id='topProfile'>
                {/* NavBar */}
                <nav>
                    <h1>Cody Thigpen</h1>
                    <div className='navFlex'>
                        <div className='navButton'>Projects</div>
                        <div className='navButton'>About Me</div>
                        <div className='navButton'>Resume</div>
                        <div className='navButton'>Contact</div>
                    </div>
                </nav>

                <div className='headerFlex'>
                    <div id='headerInfo'>
                        <h1>Hi, I'm Cody</h1>
                        <p>A web developer based in South Florida.</p>
                        <Button variant='contained'>See projects</Button>
                    </div>
                    <img src={profilePic} alt='profilePic' />
                </div>
            </div>

            <div id='project'>
                <h2>Featured Project</h2>
                <hr></hr>
                <div id='projectRow'>
                    <div id='projectInfo'>
                        <h1>Bucket List</h1>
                        <p>Bucketlist is a website that allows you to store a bucket list item in your profile. Once this objective has been completed you can check it off and blog about your adventure. The front end if this application is created in React.js, that is then connected to the MongoDB server through Mongoose. The events that are complete are then showed on the "My Feed" page with the blog post attached.</p>
                        <div id='projectLanguages'>
                            <div id='centerR'><Icon icon={bxlReact} style={{ fontSize: '36px' }} /> React</div>
                            <div id='centerC'><Icon icon={bxsFileCss} style={{ fontSize: '36px' }} /> CSS</div>
                            <div id='centerH'><Icon icon={htmlIcon} style={{ fontSize: '36px' }} /> HTML</div>
                        </div>
                        <div >
                            <div id='projectLinks'>
                                <div>
                                    <Button variant='outlined' style={{ borderColor: "#D09A49", color: "black", width: "8vw", justifyContent: 'space-around' }} href="https://bucket-list-app.netlify.app">View site <OpenInNewIcon /></Button>
                                </div>
                                <div>
                                    <Button variant='outlined' style={{ borderColor: "#D09A49", color: "black", width: "9vw", justifyContent: 'space-around' }} href="https://github.com/hitcherxb/Bucket-List">View code <GitHubIcon /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='picture'>
                        <img src={bucketList} alt='bucketList' />
                    </div>
                </div>
            </div>
            <div id='contact'>

                <h1>Contact Me</h1>

                <Button variant='outlined' style={{ borderColor: "#D09A49", color: "black", width: "9vw", justifyContent: 'space-around' }} href="#">Get in touch</Button>

            </div>
            <footer>
                <p>@  2021 Cody Thigpen</p>
                <div id='links'>
                    <a href="https://github.com/hitcherxb"><MailIcon style={{ fontSize: '36px', color: 'black' }} /></a>
                    <a href="https://www.linkedin.com/in/codythigpen/"><LinkedInIcon style={{ fontSize: '36px', color: 'black' }} /></a>
                    <a href="https://github.com/hitcherxb"><GitHubIcon style={{ fontSize: '36px', color: 'black' }} /></a>
                </div>
            </footer>
        </div >
    );
}

export default Home;