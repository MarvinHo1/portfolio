import React from 'react';
import emailjs from 'emailjs-com';
import style from '../../../../stylesheet.css';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: 'James',
      message_html: 'Check this out!'
    };
    
    emailjs.send('marvin_gmail', 'template_YUkmXCTa', templateParams)
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}


