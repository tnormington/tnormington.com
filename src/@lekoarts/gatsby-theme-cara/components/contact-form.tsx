import React from 'react'

const ContactForm = () => (
  <form 
    name="contact-form" 
    method="post" 
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    style={{ display: 'flex', flexDirection: 'column'}}
  >
    <input type="hidden" name="form-name" value="contact-form" />
    <input placeholder="Your email" type="email" name="email" />
    <textarea rows={5} placeholder="Briefly describe your project needs" name="description" />
    <input type="submit" value="Inquire" style={{ background: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)", color: "#fff"}} />
  </form>
)

export default ContactForm