import React from 'react'
import { Link } from 'react-scroll'
import bg from '../../src/assets/remy1.jpg'
import btnImg from '../../src/assets/hireme.png'

function Intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'>I'm<span className='introName'>Remmy</span><br/> Frontend developer</span>
        <p className='introPara'>I am experienced in what i do</p>
        <Link><button className='btn'><img src={btnImg} alt='button' className='btnImg'/>Hire Me</button></Link>
        </div>
<img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro
