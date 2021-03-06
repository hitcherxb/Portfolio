import React from 'react';
import { Link } from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css'

function Footer(props) {
    return (
        <div>

            <footer>
                <p>@  2021 Cody Thigpen</p>
                <div id='links'>
                    <Link to='/Contact'><MailIcon style={{ fontSize: '36px', color: 'black' }} /></Link>
                    <a href="https://www.linkedin.com/in/codythigpen/"><LinkedInIcon style={{ fontSize: '36px', color: 'black' }} /></a>
                    <a href="https://github.com/hitcherxb"><GitHubIcon style={{ fontSize: '36px', color: 'black' }} /></a>
                </div>
            </footer>

        </div >
    );
}

export default Footer;