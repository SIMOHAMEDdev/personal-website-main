import React, {useState} from 'react'
import Menu from '../components/Menu'
import logo from '../assets/logo_white.png'
import { Link } from "react-scroll";
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
// import '../Menu.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='header'>
          <div className='header-side'>
            <a href="" className='a-logo'><img src={logo} alt="" className='logo'/></a>
            <div className="section">
                <ul style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    {/* <Link className='li' to='home' duration={1000} smooth={true}>Home</Link> */}
                    <Link className='li' to='aboutme' duration={2000} smooth={true}>About</Link>
                    <Link className='li' to='projects' duration={2000} smooth={true}>Projects</Link>
                    <Link className='li' to='pricing' duration={2000} smooth={true}>Pricing</Link>
                    <Link className='li li-contact' to='contact' duration={2000} smooth={true} style={{marginLeft: "20px"}}>Contact Us</Link>
                </ul>
                {/* <div className="social"> */}
                  {/* <a href="https://github.com/SIMOHAMEDdev" target='_blank' rel="noreferrer"><BsGithub className='social-icon'/></a> */}
                  {/* <a href="https://www.instagram.com/udessats/" target='_blank' rel="noreferrer"><BsInstagram className='social-icon'/></a> */}
                  {/* <a href="https://twitter.com/simo__hamed" target='_blank' rel="noreferrer"><BsTwitter className='social-icon'/></a> */}
                {/* </div> */}
            </div>
            {/* <Menu /> */}
            <div className="menu">
                  <div className="menu__toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
            </div>
          </div>
          <div className="menuToggle">
              <ul className={`menu__list ${isOpen ? 'menu__list--open' : 'hide'}`}>
              <Link className="menu__item" to='home' duration={1000} smooth={true}>Home</Link>
              <Link className="menu__item" to='aboutme' duration={2000} smooth={true}>About</Link>
              <Link className="menu__item" to='projects' duration={2000} smooth={true}>Projects</Link>
              <Link className="menu__item" to='contact' duration={2000} smooth={true}>Contact</Link>
            <img src={logo} className="logo1" />
              <div className="social1">
                <a href="https://www.instagram.com/udessats/" target='_blank' rel="noreferrer"><BsInstagram className='social-icon1'/></a>
                        {/* <BsInstagram className='social-icon1'/> */}
                        {/* <BsTwitter className='social-icon1'/> */}
              </div>
            </ul>
          </div>

      </div>
    </>
  )
}

export default Header
