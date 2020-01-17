import React from 'react';
import emailjs from 'emailjs-com';
import style from '../../../../stylesheet.css';
// import key from './email.jsx';


class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.sendEmail = this.sendEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  sendEmail(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      to_name: 'Marvin',
      contact_email: email,
      from_name: name,
      message_html: message,
    };
    emailjs.send('marvin_gmail', 'template_YUkmXCTa', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { name, email, message } = this.state;
    // {console.log(key)}
    return (
      <div>
        <div className={style.aboutTitleContainer}>
          <h1 className={style.aboutTitle}>
            <hr />
              Contact
            <hr />
          </h1>
        </div>
        <form className="contact-form" value={name} onSubmit={this.sendEmail}>
          <label>Name</label>
          <input name="name" value={name} onChange={this.handleChange} />
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
          <label>Message</label>
          <textarea name="message" value={message} onChange={this.handleChange} />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default ContactUs;
