import React from 'react';
import style from '../../../../stylesheet.css';

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationList: ['software Engineer', 'dude', 'Overall In need of a job'],
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.typeWriter = this.typeWriter.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleScroll() {
    const element = document.getElementById('contactComponentID');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }

  // eslint-disable-next-line class-methods-use-this
  typeWriter() {
    const list = this.state.animationList;
    let count = 0;
    let index = 0;
    let text = '';
    let letter = '';
    if (count === list.length) {
      count = 0;
    }
    let test = "Hi, my name is Marvin.  Welcome to my portfolio!"
    return test
  }

  render() {
    return (
      <div className={style.introComponenet} id="introComponentID">
        <div className={style.introContainer}>
          <video className={style.videoBG} poster="https://imageportfolio.s3.amazonaws.com/night_hill.jpg" autoPlay muted loop>
            <source className={style.videoBG} src="https://imageportfolio.s3.amazonaws.com/Night_BG.mp4" type="video/mp4" />
          </video>
          <div className={style.introButtonContainer}>
            <p className={style.text}>
              {this.typeWriter()}
            </p>
            <button type="button" className={style.clickMeButton} onClick={this.handleScroll}> Contact </button>
          </div>
        </div>
      </div>
    );
  }
}


export default IntroPage;
