import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us. We're here to help!</p>

      <div className="contact-info">
        <div>
          <h2>Email Us</h2>
          <p><a href="mailto:hit@gmail.com">hit@mail.com</a></p>
        </div>
        <div>
          <h2>Call Us</h2>
          <p><a href="tel:+123456789">+880123456789</a></p>
        </div>
        <div>
          <h2>Visit Us</h2>
          <p>Tikatuly,Wari,Dhaka, Bangladesh</p>
        </div>
      </div>

      <form className="contact-form">
        <h2>Send a Message</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required className='outline'></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="#" target="_blank" >Facebook</a>
          <a href="#" target="_blank" >Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div>
      </div>
    </div>


  )
}

export default Contact