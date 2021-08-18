import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import emailjs from 'emailjs-com'
import { Button, TextareaAutosize, TextField } from '@material-ui/core'
import './Contact.css'



function Contact(props) {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6nyvw6p', 'template_gw1gaqc', e.target, 'user_UnZKo1aHV3zzls5Md6RoK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className='background'>
            <Navbar />
            <div className='container'>
                <h1 id='email-title'>Email me!</h1>
                <form className='form' noValidate autoComplete="off" onSubmit={sendEmail}>
                    <div className='input'>
                        <TextField type='text' id="standard-basic" label="Name" name='name' />
                    </div>
                    <div className='input'>
                        <TextField type='email' id="standard-basic" label="Email" name='email' />
                    </div>
                    <div className='input'>
                        <TextField type='text' id="standard-basic" label="Subject" name='subject' />
                    </div>
                    <div className='input'>
                        <TextareaAutosize aria-label="empty textarea" placeholder="Your message" name='message' />
                    </div>
                    <div className='input'>
                        <Button type='submit' variant='outlined' >Send Message</Button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;