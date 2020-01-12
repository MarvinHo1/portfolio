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
      <div className={style.introContainer}>
        <div className={style.introImage} />
        <div className={style.introButtonContainer}>
          <button type="button" className={style.clickMeButton}>Click Me!</button>
        </div>
      </div>
    );
  }
}


export default IntroPage;
