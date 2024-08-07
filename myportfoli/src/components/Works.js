import React from 'react';
import Portfolio1 from '../assets/remy.jpg';

function Works() {
  return (
    <section id='works' className='works-section'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>Below are the projects I have worked on showcasing my skills</span>
      <div className='worksImgs'>
        <div className='workItem'>
          <img src={Portfolio1} alt='p1' className='worksImg'/>
          <p className='pDesc'>My Portfolio</p>
        </div>
       
       
      </div>
    </section>
  );
}

export default Works;
