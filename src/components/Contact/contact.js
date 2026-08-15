import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.jpg';
import Facebook from '../../assets/facebook.jpg';
import FacebookIcon from '../../assets/facebook-icon.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
const Contact = () => {
  return (
    <section className='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.Some
                of the notable companies I have worked with includes

            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Client' className='clientImg'/>
                <img src={Adobe} alt='Client' className='clientImg'/>
                <img src={Microsoft} alt='Client' className='clientImg'/>
                <img src={Facebook} alt='Client' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to any discussion opportunity.</span>
            <form id='contactForm'>
                <input type="text" className='name' placeholder='Your Name'/>
                <input type="text" className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
            </form>
        </div>
        <div className='links'>
            <img src={FacebookIcon} alt='Facebook' className='link'/>
            <img src={Instagram} alt='Instagram' className='link'/>
            <img src={Twitter} alt='Twitter' className='link'/>
            <img src={Youtube} alt='Youtube' className='link'/>

        </div>

    </section>
  )
}

export default Contact