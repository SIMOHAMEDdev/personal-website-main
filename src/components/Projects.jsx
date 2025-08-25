import React from 'react'
import Section from '../Section'
import web1 from '../assets/web1.png'
import web2 from '../assets/screen.png'
import web3 from '../assets/web3.png'
import web4 from '../assets/web4.png'
import web5 from '../assets/web5.png'
import web6 from '../assets/web6.png'
import {BsArrowUpRight} from 'react-icons/bs'

const Projects = () => {
  return (
    <Section>
      <div className="projects">
        <div className="title">
          <h2>PROJECTS</h2>
          <div className='underline'></div>
          <p className="about-desc about-desc1">
          Here you will find some of the clients projects that We created with 
          each project containing the tools used in it
          </p>
        </div>
        <div className="porto">
        <div className="project">
            <div className="site">
              <img className='web-img6 web-img' src={web6} />
            </div>
            <div className="desc">
              <div>
              <p className="site-name">STRIVEFIT STUDIO</p>
              <p className="tools">REACT <span className='cercle'>●</span> CSS</p>
              </div>
              <div>
              <a href="https://strivefitstu.netlify.app/" className="a" target='_blank' rel="noreferrer">SITE <BsArrowUpRight className='arrow-icon'/></a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="site">
              <img className='web-img2 web-img' src={web2}/>
            </div>
            <div className="desc">
              <div>
              <p className="site-name">ALECIA PORTOFOLIO</p>
              <p className="tools">REACT <span className='cercle'>●</span> CSS</p>
              </div>
              <div>
              <a href="https://alecialailson.netlify.app/" className="a" target='_blank' rel="noreferrer">SITE <BsArrowUpRight className='arrow-icon'/></a>
              </div>
            </div>
          </div>
          {/* <div className="project">
            <div className="site">
              <img className='web-img5 web-img' src={web5} />
            </div>
            <div className="desc">
              <div>
              <p className="site-name">ALEENA PORTOFOLIO</p>
              <p className="tools">REACT <span className='cercle'>●</span> CSS</p>
              </div>
              <div>
              <a href="https://aleenaedinson.netlify.app/" className="a" target='_blank' rel="noreferrer">SITE <BsArrowUpRight className='arrow-icon'/></a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="site">
              <img src={web1} className='web-img1 web-img'/>
            </div>
            <div className="desc">
              <div>
              <p className="site-name">ARENA PORTOFOLIO</p>
              <p className="tools">REACT <span className='cercle'>●</span> CSS</p>
              </div>
              <div>
                <a href="https://arenasmith.netlify.app/" className="a" target='_blank' rel="noreferrer">SITE <BsArrowUpRight className='arrow-icon'/></a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Section>
  )
}

export default Projects
