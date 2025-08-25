import React from 'react'
import Section from '../Section'
import {FaHtml5} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io5'
import {SiJavascript, SiMongodb, SiExpress} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'

const Aboutme = () => {
  return (
    <Section>
      <div className='aboutme'>
        <div className="title">
          <h2>ABOUT US</h2>
          <div className='underline'></div>
          <p className="about-desc">
          Here you will find more information 
          about us, what We do, and the tools we use mostly in terms of programming 
          and technology
          </p>
        </div>
        <div className="sides">
          <div className='side1'>
          <div>
          {/* <h3>Get to know us!</h3> */}
          <p className="description">
          At <span>Udessa</span>, we believe that construction and engineering businesses deserves more than just a website 
           it deserves a digital solution that drives real growth. <br />
          <br /> 
          We are a <span> Software Solutions Agency </span> dedicated to the construction and engineering industry. Whether you’re a contractor, 
          architect, interior designer, or consultant, we help you digitize your business 
          with tools built for your industry. <br /> From <span>Custom Websites</span> that highlight your expertise, 
          to <span> AI-powered chatbots, automation systems, and digital business solutions</span>, we create 
          platforms that save time, simplify communication, and bring in more clients. <br />
           <br /> Our mission is simple : make technology work for you, so you can 
           focus on what matters most, running your business.
                </p>
          </div>
          </div>

          <div className="side2">
            {/* <h3>My Skills</h3> */}
              <div className="skills">
              <div>
              <FaHtml5 className='skill-icon html'/>
              <IoLogoCss3 className='skill-icon css'/>
              </div>
              <div>
              <SiJavascript className='skill-icon js'/>
              <FaReact className='skill-icon react'/>
              </div>
              <div>
              <SiMongodb className='skill-icon mdb'/>
              <SiExpress className='skill-icon express'/>
              </div>
              </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Aboutme