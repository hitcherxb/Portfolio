import React from 'react';
import './Home.css';
import { Icon } from '@iconify/react';
import bxlReact from '@iconify/icons-bx/bxl-react';
import htmlIcon from '@iconify/icons-dashicons/html';
import bxsFileCss from '@iconify/icons-bx/bxs-file-css';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import GitHubIcon from '@material-ui/icons/GitHub';
import profilePic from '../Pictures/me.png'
import bucketList from '../Pictures/bucketList.png'
import { Button } from '@material-ui/core'
import { StylesProvider } from "@material-ui/core/styles";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'




function Home(props) {
    return (
        <div>
            <div id='topProfile'>

                <Navbar />

                <div className='headerFlex'>
                    <div id='headerInfo'>
                        <h1>Hi, I'm Cody</h1>
                        <p>A web developer based in South Florida.</p>
                        <Button variant='contained' href="/Projects" >See Projects</Button>
                    </div>
                    <img src={profilePic} alt='profilePic' />
                </div>
            </div>
            <div id='featuredP'>
                <h2>Featured Project</h2>
                <hr></hr>
            </div>
            <div id='featured-project'>

                <div id='projectRow'>
                    <div id='projectInfo'>
                        <h1>Bucket List</h1>
                        <p>A simple website that allows you to blog about your bucketlist accomplishments on your own profile.</p>
                        <div id='projectLanguages'>
                            <div id='centerR'><Icon ClassName='iconSize' icon={bxlReact} style={{ fontSize: '36px' }} /> React</div>
                            <div id='centerC'><Icon ClassName='iconSize' icon={bxsFileCss} style={{ fontSize: '36px' }} /> CSS</div>
                            <div id='centerH'><Icon ClassName='iconSize' icon={htmlIcon} style={{ fontSize: '36px' }} /> HTML</div>
                        </div>
                        <div >
                            <div id='projectLinks'>
                                <StylesProvider injectFirst>
                                    <div>
                                        <Button variant='outlined' id='liveButton' href="https://bucket-list-app.netlify.app">View site <OpenInNewIcon /></Button>
                                    </div>
                                    <div>
                                        <Button variant='outlined' ClassName='gitButton' href="https://github.com/hitcherxb/Bucket-List">View code <GitHubIcon /></Button>
                                    </div>
                                </StylesProvider>
                            </div>
                        </div>
                    </div>

                </div>
                <div id='picture'>
                    <img src={bucketList} alt='bucketList' />
                </div>
            </div>
            <div id='contact'>

                <h1>Contact Me</h1>

                <Button variant='outlined' href="/Contact">Get in touch</Button>

            </div>
            <Footer />
        </div >
    );
}

export default Home;