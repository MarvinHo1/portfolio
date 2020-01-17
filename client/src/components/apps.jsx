import React from 'react';
import axios from 'axios';
import IntroPage from './introView/intro.jsx';
import NavBar from './IntroView/navBar.jsx';
import AboutMeAnimations from './aboutMe/about.jsx';
import Card from './projects/card.jsx';
import style from '../../../stylesheet.css';
import ContactUs from './contact/contact.jsx'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/')
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }

  render() {
    return (
      <div className={style.mainPage}>
        <div className={style.test2}>test2</div>
        <IntroPage />
        <NavBar />
        <AboutMeAnimations />
        <Card />
        <ContactUs />
      </div>
    );
  }
}

export default Portfolio;
