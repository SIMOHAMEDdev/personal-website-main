import React from 'react'
import Section from '../Section'
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { BsCaretRightFill  } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // const requestBody = {
    //   name: name,
    //   email: email,
    //   message: message,
    // };

    emailjs.sendForm('service_9zywbx7', 'template_9pfo8ui', form.current, 'F2Yr0X-wV5kngQUm3')
    .then((result) => {
      setName("");
      setEmail("");
      setMessage("");
  }, (error) => {
      console.log(error.text);
  });
    
    // fetch("http://localhost:5173/api/send-message", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(requestBody),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <Section>
      <div className='contact'>
        <div className="title">
        <h2>CONTACT</h2>
        <div className='underline'></div>
        <p className="about-desc">
        Feel free to book a One-On-One call with us or contact us by submitting the form below and we will get back to 
        you as soon as possible
        </p>
        <a href='https://calendly.com/clashtv384/new-meeting' className='styyle' style={{padding: "8px 8px 8px 4px", borderRadius: "20px", textDecoration: "none", marginTop: "2pc"}} target='_blank' rel="noreferrer">
          <span style={{padding: "5px 15px", borderRadius: "20px", backgroundColor: "black", marginRight: "10px"}}>New</span>
          <span>Book a 15 min One-on-One</span>
          <BsCaretRightFill  color='rgb(204, 162, 83)' style={{marginLeft: "5px"}}/>
        </a>
        <form onSubmit={sendEmail} ref={form}>
          <div className='input'>
            <label htmlFor="name">Name:</label> <br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Your Name'
              name="user_name"
              required
            />
          </div>
          <div className='input'>
            <label htmlFor="email">Email:</label> <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email'
              name="user_email" 
              required
            />
          </div>
          <div className='input'>
            <label htmlFor="message">Message:</label> <br />
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6" cols="66.8"
              placeholder='Enter Your Message'
              name="message"
              required
            />
          </div>
          <button type="submit" className='submit-btn' value="Send">SEND</button>
          </form>
          </div>
      </div>
    </Section>
  )
}

export default Contact