import React, {useEffect} from 'react'
import Section from '../Section'
import { Link } from "react-scroll";
import Groq from "groq-sdk";
import site1 from '../assets/site1.jpeg'
import site2 from '../assets/site2.jpeg'
import site3 from '../assets/site3.jpeg'
import site4 from '../assets/site4.jpeg'
import site5 from '../assets/site5.jpg'
import site6 from '../assets/site6.jpeg'
import site7 from '../assets/site7.jpeg'
import site8 from '../assets/site8.jpeg'
import site9 from '../assets/site9.png'

const Home = () => {
  const arr = [site1, site2, site3, site4, site5, site6, site7, site8, site9]
  const API_key = "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"
  const groq = new Groq({ apiKey: API_key, dangerouslyAllowBrowser: true });

  const main = async() => {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    console.log(chatCompletion.choices[0]?.message?.content || "");
  }
  
  const getGroqChatCompletion = async () => {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "talk to me about the importance of AI?",
        },
      ],
      model: "gemma2-9b-it",
    });
  }
  // useEffect(()=>{
  //   main()
  // }, [])

  return (
    <Section >
        <div className='home'>
          <div className="personal">
              {/* <div className="pers-img"/> */}
          </div>
          <h1 className='h1-home'>Welcome ! <br />
          This is Udessa<br />
          A Software Solutions Agency</h1>
          <Link className="contact-btn" to='contact' duration={2000} smooth={true}>Contact Us</Link>
          <div className="projects_animations">
            <div className='images-div'>
              {arr.map((pic, index)=>{
                return <img src={pic} alt="" style={{height: "14pc"}}/>
              })}
            </div>
          </div>
        </div>
    </Section>
  )
}

export default Home