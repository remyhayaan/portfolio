import React from 'react';
import FacebookIcon from '../assets/facebook-icon.png';
import InstagramIcon from '../assets/instagram.png';
import TwitterIcon from '../assets/twitter.png';
import YoutubeIcon from '../assets/youtube.png';

function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:remmiehayaan@gmail.com';
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Here, you can add any additional logic you want to handle form data

    // Refresh the page
    window.location.reload();
  };

  return (
    <div id='contact'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>
        Feel free to reach out to me via email . I'm always open to discussing new opportunities or answering any questions you might have.
      </span>
      <form className="contactForm" onSubmit={handleSubmit}>
        <button type='button' onClick={handleEmailClick} className='submitBtn'>
          Send Email
        </button>
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
