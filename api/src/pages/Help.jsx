import React from 'react'
import "./help.css"
import { Container } from 'react-bootstrap'

const Help = () => {
  return (
   <>
     <Container>
     <div className="contact-section">
      <h2>Contact Us</h2>
      <p>If you need further assistance, you can reach us at:</p>
      <ul>
        <li><a href="mailto:hit@gmail.com"> hit@gmail.com</a></li>
        <li><a href="tel:+123456789">Phone: +880123456789</a></li>
      </ul>
    </div>
     </Container>
    <section id='part-2'>
      <Container>
      <div className="guides-section">
      <h2>Guides</h2>
      <p>Explore our guides to help you navigate through the site:</p>
      <ul>
        <li><a href="/guide/how-to-order">How to Place an Order</a></li>
        <li><a href="/guide/returning-items">Returning an Item</a></li>
      </ul>
    </div>
      </Container>
    </section>
     <section id='part-3'>
      <Container>
      <div className="help-page">
      <h1>Help Centre</h1>
      <input type="search" placeholder="Search for help..." className="search-bar"/>
     </div>
      </Container>
     </section>
   </>
  )
}

export default Help