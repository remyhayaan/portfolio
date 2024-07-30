import React from 'react';
import FacebookIcon from '../assets/facebook-icon.png';
import InstagramIcon from '../assets/instagram.png';
import TwitterIcon from '../assets/twitter.png';
import YoutubeIcon from '../assets/youtube.png';
import './Contact.css'; // Importing the CSS file

function Contact() {
  return (
    <div id='contact'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</span>
      <form action="mailto:youremail@example.com" method="post" className="contactForm">
      <input type='text' className='name' placeholder='Your Name' name='your_name' required />
        <input type='email' className='email' placeholder='Your Email' name='your_email' required />
        <textarea className='msg' name='message' rows='5' placeholder='Your Message' required></textarea>
        <button type='submit' className='submitBtn'>Submit</button>
        <div className='links'>
          <img src={FacebookIcon} alt='Facebook' className='link' />
          <img src={YoutubeIcon} alt='Youtube' className='link' />
          <img src={TwitterIcon} alt='Twitter' className='link' />
          <img src={InstagramIcon} alt='Instagram' className='link' />
        </div>
      </form>
      
    </div>
  );
}

export default Contact;
