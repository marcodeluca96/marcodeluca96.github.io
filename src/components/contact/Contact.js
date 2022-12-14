import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TbBrandTelegram } from 'react-icons/tb';
import { contactData } from '../../assets/data';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>{contactData.email}</h5>
            <a href={`malito:${contactData.email}`}>Send Email</a>
          </article>
          <article className='contact__option'>
            <AiOutlineInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>{contactData.instagram.user}</h5>
            <a href={contactData.instagram.link}>Instagram</a>
          </article>
          <article className='contact__option'>
            <TbBrandTelegram className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>marco@gmail.com</h5>
            <a href='malito:sa'>Send Message</a>
          </article>
        </div>
        <form action=''>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows={7}
            placeholder='Your Message'
            required
          />
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
