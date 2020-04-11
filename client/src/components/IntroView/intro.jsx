import React from 'react';
import style from '../../../../stylesheet.css';

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [' ', 'a fullstack software engineer ', 'work with various technologies', 'skilled with different databases', ' a quick learner and team player!'],
      delLetter: false,
      text: '',
      index: 0,
      wordCount: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.typeWriter = this.typeWriter.bind(this);
  }

  componentDidMount() {
    this.typeWriter();
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
    const {
      list, delLetter, text, wordCount, index,
    } = this.state;
    const word = list[index];
    if (word.length !== text.length && delLetter === false) {
      this.setState({
        text: text + word.charAt(wordCount),
        wordCount: wordCount + 1,
      });
    } else if (delLetter === true) {
      if (text.length === 0) {
        this.setState({
          delLetter: false,
          index: index + 1,
        });
      }
      if (index === list.length - 1) {
        this.setState({ index: 0 });
      }
      this.setState({ text: text.slice(0, (text.length - 2)) });
    }
    if (word.length === text.length) {
      this.setState({
        delLetter: true,
        wordCount: 0,
      });
    }
    setTimeout(() => this.typeWriter(), 80);
  }

  render() {
    const { text } = this.state;
    return (
      <div className={style.introComponenet} id="introComponentID">
        <div className={style.introContainer}>
          <video className={style.videoBG} poster="https://imageportfolio.s3.amazonaws.com/night_hill.jpg" autoPlay muted loop>
            <source className={style.videoBG} src="https://imageportfolio.s3.amazonaws.com/Night_BG.mp4" type="video/mp4" />
          </video>
          <div className={style.introButtonContainer}>
            <p className={style.text}>
                Hello, I'm Marvin!
            </p>
            <p className={style.text}>
              Welcome to my Portfolo.
            </p>
            <div className={style.textContainer}>
              <div className={style.typeWriterContainer}>
                <div className={style.tabletTestContainer}>
                  I am {text}
                </div>
                <hr />
              </div>
            </div>
            <button type="button" className={style.clickMeButton} onClick={this.handleScroll}> Contact </button>
          </div>
        </div>
      </div>
    );
  }
}


export default IntroPage;
