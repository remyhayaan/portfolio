import React from 'react';
import UIDesign from '../../src/assets/ui-design.png';
import WebDesign from '../../src/assets/website-design.png';
import AppDesign from '../../src/assets/app-design.png';

function Skills() {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>Discover the range of skills and expertise I have.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='uidesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>Creating user-centric designs that ensure an intuitive and engaging experience.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt='webdesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Website Design</h2>
            <p>Designing responsive and visually appealing websites that provide a seamless user experience across all devices. Skilled in HTML, CSS, and modern design trends.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='appdesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>WebApp Design</h2>
            <p>Designing web applications that are both functional and user-friendly. Focus on creating intuitive interfaces and ensuring optimal performance and accessibility.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
