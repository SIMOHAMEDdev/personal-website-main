import React from 'react'
import { BsDiamond, BsDiamondHalf, BsDiamondFill } from "react-icons/bs";
import Section from '../Section';
import { BsFillLightningChargeFill } from "react-icons/bs";
import AddOnsTable from './AddOnsTable';

function Pricing() {
    const data = [["Starter", "Professional", "Business"],
                ["A clean and simple website to put your business online. Perfect for small trades who just need to be found and contacted.",
                "A modern, multi-page website with services, projects, and SEO basics to help you attract more clients and look professional.",
                "A complete online presence with advanced features like booking, payments, or product listings. Ideal for contractors, suppliers, or developers."],
                ["150$~250$", "300$~500$", "600$~700$"],
                [["1–3 pages (Home, About, Contact)", "Mobile-friendly template", "WhatsApp button / contact form"],
                ["4–6 pages (Services, Projects, Blog, etc.)", "Google Maps + SEO basics", "Quote request form"],
                ["Up to 10 pages (catalog, portfolio, real estate listings, etc.)", "Booking system or payment integration", "Project gallery"]]]
  return (
      <Section>
        <div className="title" >
          <h2>Plans</h2>
          <div className='underline'></div>
          <p className="about-desc about-desc1">
          Here you will find the pricing plans and you can choose what works for you best!
          </p>
        </div>
          <div className='container' style={{ display: "flex", flexDirection:"row", gap: "30px"}}>
            <div className="starter" style={{border: "2px solid #fff", padding: "20px", borderRadius: "30px"}}>
                <BsDiamond style={{backgroundColor: "#fff", padding: "10px", borderRadius: "50%", fontSize: "25px"}}/>
                <h3>Starter</h3>
                <p style={{color:'gray', maxWidth: "350px", fontSize: "11px"}}>A clean and simple website to put your business online. Perfect for small trades who just need to be found and contacted.</p>
                <h2>150$~250$</h2>
                <div style={{display:"flex", flexDirection:"column", color: "white", fontSize: "13px"}}>
                    <p><BsFillLightningChargeFill style={{marginRight: "10px"}} color='gray'/>
                        1–3 pages (Home, About, Contact)</p>
                    <p><BsFillLightningChargeFill style={{marginRight: "10px"}} color='gray'/>
                        Mobile-friendly template</p>
                    <p><BsFillLightningChargeFill style={{marginRight: "10px"}} color='gray'/>
                        WhatsApp button / contact form</p>
                </div>
            </div>
            <div className="professional" style={{border: "2px solid #fff", padding: "20px", borderRadius: "30px"}}>
                <BsDiamondHalf style={{backgroundColor: "#fff", padding: "10px", borderRadius: "50%", fontSize: "25px"}}/>
                <h3>Professional</h3>
                <p style={{color:'gray', maxWidth: "350px", fontSize: "11px"}}>Modern, multi-page website with services, projects, and SEO basics to help you attract more clients and look professional.</p>
                <h2>300$~500$</h2>
                <div style={{display:"flex", flexDirection:"column", color: "white", fontSize: "13px"}}>
                    <p><BsFillLightningChargeFill style={{marginRight: "10px"}} color='gray'/>
                    4–6 pages (Services, Projects, Blog, etc.)</p>
                    <p><BsFillLightningChargeFill style={{marginRight: "10px"}} color='gray'/>
                    Google Maps + SEO basics</p>
                    <p><BsFillLightningChargeFill style={{marginRight: "10px"}} color='gray'/>
                    Quote request form</p>
                </div>
            </div>
            <div className="business" style={{border: "2px solid #fff", padding: "20px", borderRadius: "30px", fontSize: "25px"}}>
                <BsDiamondFill style={{backgroundColor: "#fff", padding: "10px", borderRadius: "50%"}}/>
                <h3>Business</h3>
                <p style={{color:'gray', maxWidth: "350px", fontSize: "11px"}}>A complete online presence with advanced features like booking, payments, or product listings. Ideal for contractors, suppliers, or developers.</p>
                <h2>600$~700$</h2>
                <div style={{display:"flex", flexDirection:"column", color: "white", fontSize: "13px"}}>
                    <p><BsFillLightningChargeFill style={{marginRight: "10px"}} color='gray'/>
                    Up to 10 pages (catalog, portfolio, real estate listings, etc.)</p>
                    <p><BsFillLightningChargeFill style={{marginRight: "10px"}} color='gray'/>
                    Booking system or payment integration</p>
                    <p><BsFillLightningChargeFill style={{marginRight: "10px"}} color='gray'/>
                    Project gallery</p>
                </div>
            </div>
          </div>
          <AddOnsTable />
      </Section>
  )
}

export default Pricing
