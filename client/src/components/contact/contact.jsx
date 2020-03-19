import React from 'react';
import emailjs from 'emailjs-com';
import style from '../../../../stylesheet.css';
import key from '../../../../email.jsx';


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
    this.resetEmailMessage = this.resetEmailMessage.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  sendEmail(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const templateParams = {
      to_name: 'Marvin',
      contact_email: email,
      from_name: name,
      message_html: message,
    };

    if (email.length < 5) {
      return alert('Please enter vaild name and email.  Thank You')
    }
    emailjs.send('marvin_gmail', 'template_YUkmXCTa', templateParams, key)
      .then((response) => {
        this.resetEmailMessage();
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

  resetEmailMessage() {
    // eslint-disable-next-line no-alert
    alert('Email has been sent!  I will try to get back to you as soon as possible.');
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className={style.contactComponent} id="contactComponentID">
        <div className={style.contactContainer}>
          <div className={style.aboutTitleContainer}>
            <h1 className={style.aboutTitle}>
              <hr />
                Contact
              <hr />
            </h1>
          </div>
          <div className={style.contactFormContainer}>
            <form className={style.formsComponent} value={name} onSubmit={this.sendEmail}>
              <div className={style.nameAndEmailContainer}>
                <input className={style.name} type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" />
                <input className={style.email} type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" />
              </div>
              <div className={style.messageContainer}>
                <label>Message</label>
                <textarea className={style.message} name="message" value={message} onChange={this.handleChange} />
              </div>
              <div className={style.sendMessageButtonContainer}>
                <input className={style.sendMessageButton} type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
        <div className={style.containerForIcons}>
          <section className={style.icons}>
            <div className={style.contactMessage}>Please feel free to send me a direct message by filling the form above or contact me through social sites listed below</div>
            <div className={style.socialIcons}>
              <a className={style.iconbtns} href="https://www.linkedin.com/in/marvinho1"><i className="iconbtn fab fa-linkedin-in" /></a>
              <a className={style.iconbtns} href="https://github.com/MarvinHo1"><i className="iconbtn fab fa-github" /></a>
              {/* <a className={style.iconbtns} href="#"><i className="iconbtn fab fa-facebook-f" /></a> */}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ContactUs;
