import React from 'react';
import './Home.css';
import rectangle from '../Pictures/Rectangle.png'
import profilePic from '../Pictures/me.png'
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
                        <h2>A web developer based in Lake Worth, Florida.</h2>
                        <Button variant='contained' color='primary'>See projects</Button>
                    </div>
                    <img src={profilePic} alt='profilePic' />
                </div>
            </div>
        </div>
    );
}

export default Home;