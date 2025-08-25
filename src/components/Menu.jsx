import React, { useState } from 'react';
import logo from '../assets/logo.jpg'
import { Link } from "react-scroll";
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
import '../Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className="menu__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu__list ${isOpen ? 'menu__list--open' : 'hide'}`}>
        <Link className="menu__item" to='home' duration={1000} smooth={true}>Home</Link>
        <Link className="menu__item" to='aboutme' duration={2000} smooth={true}>About</Link>
        <Link className="menu__item" to='projects' duration={2000} smooth={true}>Projects</Link>
        <Link className="menu__item" to='contact' duration={2000} smooth={true}>Contact</Link>
      <img src={logo} className="logo1" />
      <div className="social1">
                <a href="https://www.instagram.com/udessats/" target='_blank' rel="noreferrer"><BsInstagram className='social-icon'/></a>
                {/* <BsInstagram className='social-icon1'/> */}
                {/* <BsTwitter className='social-icon1'/> */}
            </div>
      </ul>
      
    </div>
  );
}

export default Menu;