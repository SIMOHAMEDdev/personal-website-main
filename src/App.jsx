import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './assets/logo_white.png'
import { Link, animateScroll as scroll } from "react-scroll";
import {BsGithub, BsInstagram} from 'react-icons/bs'
import Header from './components/Header'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Pricing from './components/Pricing'

function App() {
  return (
      <Router>
          <div className='container'>
            <Header />
            <Routes>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={Aboutme} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
              <Route path='/pricing' component={Pricing} />
            </Routes>
            <Home />
            <Aboutme />
            <Projects />
            <Pricing />
            <Contact />
            <footer>
              <div className='sec1'>
              <a href="" className='a-logo'><img src={logo} alt="" className='logo'/></a>
                <ul className='ul-footer'>
                    <Link className='li' to='header' duration={2000} smooth={true}>Home</Link>
                    <Link className='li' to='aboutme' duration={2000} smooth={true}>About</Link>
                    <Link className='li' to='projects' duration={2000} smooth={true}>Projects</Link>
                    <Link className='li' to='contact' duration={2000} smooth={true}>Contact</Link>
                </ul>
              </div>
              <div className="sec2">
                <p className="copyright">© Copyright 2023. Made by <a href="" className='a1'>Udessa</a></p>
                <div className="social">
                    {/* <a href="https://github.com/SIMOHAMEDdev" target='_blank' rel="noreferrer"><BsGithub className='social-icon'/></a> */}
                    <a href="https://www.instagram.com/udessats/" target='_blank' rel="noreferrer"><BsInstagram className='social-icon'/></a>
                    {/* <a href="https://twitter.com/simo__hamed" target='_blank' rel="noreferrer"><BsTwitter className='social-icon'/></a> */}
                </div>
              </div>
            </footer>
          </div>
      </Router>
  )
}

export default App
