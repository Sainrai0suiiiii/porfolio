import React, {useState} from 'react';
import './navbar.css';
import logo from '../assets/logo.png';  // adjust based on what the dir command shows
import contact from '../assets/contact.png';
import menu from '../assets/menu.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const[showMenu, setShowMenu]= useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contact} alt='contact' className='desktopMenuImg'/>Contact ME</button>

        <img src={menu} alt='menu' className='menu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu'style={{display:showMenu? 'flex':"none" }}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar;