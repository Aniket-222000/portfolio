import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2y9tku4', 'template_xr4dkc6', form.current, '-6pQsTYc2cbtEBKnO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id = "contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>chakkarwaraniket2@gmail</h5>
            <a href="mailto:chakkarwaraniket2@gmail.com" target='__blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Aniket Chakkarwar</h5>
            <a href='https://m.me/Aniket Chakkarwar' target='__blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 9404902699</h5>
            <a href='https://api.whatsapp.com/send?phone=9404902699' target='__blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
          <button onclick="myFunction()" type='submit' className='btn btn-primary'>Send</button>

{/* <script>
function myFunction() {
  alert("I am an alert box!")
}
</script> */}

        </form>

      </div>
    </section>
  )
}

export default Contact
