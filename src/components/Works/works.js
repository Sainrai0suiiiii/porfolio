import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/Portfolio1.jpg';
import Portfolio2 from '../../assets/Portfolio2.jpg';
import Portfolio3 from '../../assets/Portfolio3.jpg';
import Portfolio4 from '../../assets/Portfolio4.jpg';
import Portfolio5 from '../../assets/Portfolio5.jpg';
import Portfolio6 from '../../assets/Portfolio6.jpg';



const Works = () => {
  return (
    <section id ='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I apply data science techniques to transform raw data into meaningful insights and data-driven decisions. My skills include data cleaning, exploratory data analysis, statistical analysis, data visualization, and predictive modeling using tools such as Python, R, SQL, and relevant data science libraries. I focus on identifying patterns, communicating insights clearly, and solving real-world problems through data.</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className='worksImg'/>
            <img src={Portfolio2} alt='' className='worksImg'/>
            <img src={Portfolio3} alt='' className='worksImg'/>
            <img src={Portfolio4} alt='' className='worksImg'/>
            <img src={Portfolio5} alt='' className='worksImg'/>
            <img src={Portfolio6} alt='' className='worksImg'/>
        </div>
        <button className='workBtn' >See More</button>
    </section>
  )
}

export default Works