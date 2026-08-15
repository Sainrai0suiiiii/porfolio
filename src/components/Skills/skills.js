import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.jpg';
import WebDesign from '../../assets/website-design.jpg';
import AppDesign from '../../assets/app-design.jpg';

const Skill = () => {
  return (
    <section id='skill'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for details.I am proficient in HTML,CSS,JavaScript as well as data manipulations, data cleaning, data handling also i am well educated with pythons libraries.</span>
        <div className='skillBar'>
            <img src={UIDesign} alt ='UIdesign' className = "SkillBarImg"/>
            <div className='skillBar'>
                <h2>UI/UX Design</h2>
                <p>I design intuitive, user-centered digital experiences with a strong focus on usability, visual hierarchy, accessibility, and responsive design. My UI/UX process involves user research, wireframing, prototyping, design systems, and high-fidelity interfaces, ensuring that every design is both visually engaging and functional across different devices.
</p>
            </div>

             <img src={WebDesign} alt='WebDesign' className = "SkillBarImg"/>
            <div className='skillBar'>
                <h2>Web Design</h2>
                <p>I create modern, responsive, and user-focused websites(MERN Stack) with a strong
                    emphasis on visual hierarchy, usability, accessibility, and seamless
                    experiences across desktop, tablet, and mobile devices.</p>
            </div>

             <img src= {AppDesign} alt='AppDesign' className = "SkillBarImg"/>
            <div className='skillBar'>
                <h2>App Design</h2>
                <p> I design intuitive and engaging mobile app interfaces that combine
                    clean visuals with smooth navigation, consistent design systems, and
                    user-centered interactions for a seamless experience.</p>
            </div>
        </div>
    </section>
  )
}

export default Skill