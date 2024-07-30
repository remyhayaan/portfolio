import React, { useState } from 'react';
import logo from '../../src/assets/logo.png';
import menu from '../../src/assets/menu.png'
import contactImg from '../../src/assets/contact.png';
import { Link } from 'react-scroll';

function Navbar() {
const [showMenu , setshowMenu] = useState(false);

  return (
    <nav className='navbar'>
  <img src={logo} alt='' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='programming-languages' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Languages</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' />Contact Me</button>
        
        
      <img src={menu} alt='' className='mobMenu' onClick={() => setshowMenu(!showMenu)} />
      <div className='navMenu'style={{ display: showMenu ? 'flex' : 'none' }}      >
        <Link activeClass='active' to='intro' spy={true} smooth={true}  offset={-100} duration={500} className='ListItem' onClick={() => setshowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={() => setshowMenu(false)}>About</Link>
        <Link activeClass='active' to='programming-languages' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setshowMenu(false)}>Languages</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setshowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setshowMenu(false)}>Contact</Link>
      
      </div>
    </nav>
  );
}

export default Navbar;
