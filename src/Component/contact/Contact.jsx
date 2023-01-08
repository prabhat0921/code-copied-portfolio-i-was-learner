import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
           <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>prabhatkushwah21@gmail.com</h5>
            <a href="mailto:prabhatkushwah21@gmail.com" target="_blank">Send a Message</a>
           </article>
           <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Prabhat Kushwaha</h5>
            <a href="https://facebook.com" target="_blank">Send a Message</a>
           </article>
           <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+917007428216</h5>
            <a href="https://api.whatsapp.com/send?phone=+917007428216" target="_blank">Send a Message</a>
           </article>
        </div>
        {/* =====================================END OF CONTACT OPTION========================================= */}
        <form action="" className='forms'>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='You Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
