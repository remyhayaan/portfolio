import FacebookIcon from '../assets/facebook-icon.png';
import InstagramIcon from '../assets/instagram.png';
import TwitterIcon from '../assets/twitter.png';
import YoutubeIcon from '../assets/youtube.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Get form field values
    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();
  
    // Check if fields are empty
    if (!userName || !userEmail || !message) {
      alert('Please fill out all fields before submitting.'); // Show an alert if any field is empty
      return; // Prevent submission
    }
  
    emailjs
      .sendForm('service_n70xe2n', 'template_76uej0g', form.current, {
        publicKey: 'ZkDAhR_2xCVsF2zSC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  

  return (
    <div id='contact'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>
        Feel free to reach out to me via email. I'm always open to discussing new opportunities or answering any questions you might have.
      </span>
      {/* <form className="contactForm" > */}
        <form ref={form} onSubmit={sendEmail} className="contactForm">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
  
        {/* <input
          type="email"
          placeholder="Your Email"
          required
          className="emailInput"
        />
        <button type='button'  className='submitBtn'>
          Send Email
        </button> */}
        <div className='links'>
          <img src={FacebookIcon} alt='Facebook' className='link' />
          <img src={YoutubeIcon} alt='YouTube' className='link' />
          <img src={TwitterIcon} alt='Twitter' className='link' />
          <img src={InstagramIcon} alt='Instagram' className='link' />
        </div>
      </form>
    </div>
  );
}

export default Contact;
