import React from 'react'
import Portfolio1 from '../assets/portfolio-1.png'
import Portfolio2 from '../assets/portfolio-2.png'
import Portfolio3 from '../assets/portfolio-3.png'
import Portfolio4 from '../assets/portfolio-4.png'
import Portfolio5 from '../assets/portfolio-5.png'
import Portfolio6 from '../assets/portfolio-6.png'


function Works() {
  return (
   <section id='works'>

    <h2 className='worksTitle'>My Portfolio</h2>
    <span className='worksDesc'>lorem ipsum......................</span>
    <div className='worksImgs'>
        <img src={Portfolio1} alt='p1' className='worksImg'/>
        <img src={Portfolio2} alt='p2' className='worksImg'/> 
        <img src={Portfolio3} alt='p3' className='worksImg'/>
        <img src={Portfolio4} alt='p4' className='worksImg'/>
        <img src={Portfolio5} alt='p5' className='worksImg'/>
        <img src={Portfolio6} alt='p6' className='worksImg'/>
    </div>
   </section>
  )
}

export default Works
