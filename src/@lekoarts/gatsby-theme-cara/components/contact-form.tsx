import React from 'react'

const ContactForm = () => (
  <>
    <style>{`
      .inquire-btn {
        background: linear-gradient(135deg, #D4145A 0%, #FBB03B 100%);
        background-size: 200% 200%;
        color: #fff;
        border: none;
        padding: 12px 32px;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 6px;
        position: relative;
        overflow: hidden;
        transition: transform 0.25s ease, box-shadow 0.25s ease, background-position 0.5s ease;
        box-shadow: 0 4px 15px rgba(212, 20, 90, 0.3);
      }
      .inquire-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          120deg,
          transparent 0%,
          rgba(255, 255, 255, 0.3) 50%,
          transparent 100%
        );
        transition: left 0.5s ease;
      }
      .inquire-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(212, 20, 90, 0.5), 0 0 20px rgba(251, 176, 59, 0.3);
        background-position: 100% 0;
      }
      .inquire-btn:hover::before {
        left: 100%;
      }
      .inquire-btn:active {
        transform: translateY(0) scale(0.98);
        box-shadow: 0 2px 10px rgba(212, 20, 90, 0.3);
      }
    `}</style>
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
      <button type="submit" className="inquire-btn">Inquire</button>
    </form>
  </>
)

export default ContactForm