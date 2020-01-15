import React from 'react';
import style from '../../../../stylesheet.css';

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      // hideOrShowHambugerDropDown: "nav"
    };
  }

  render() {
    return (
      <div className={style.introComponenet}>
        <div className={style.introContainer}>
          <video className={style.videoBG} poster="https://imageportfolio.s3.amazonaws.com/night_hill.jpg" autoPlay muted loop>
            <source src="https://imageportfolio.s3.amazonaws.com/Night_BG.mp4" type="video/mp4" />
          </video>
          <div className={style.introButtonContainer}>
            <p>
              Welcome to my profile! my name is Marvin Ho.
              I am a fullstack engineer.
            </p>
            <button type="button" className={style.clickMeButton}>Click Me!</button>
          </div>
        </div>
      </div>
    );
  }
}


export default IntroPage;
