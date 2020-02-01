import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import style from '../../../../stylesheet.css';

const AboutMeAnimations = (props) => {
  return (
    <div className={style.aboutMePage} id="aboutMeComponentID">
      <div className={style.aboutTitleContainer}>
        <h1 className={style.aboutTitle}>
          <hr />
          About Me
          <hr />
        </h1>
      </div>
      <div className={style.descriptionContainer}>
        <div>
          <Fade left>
              <img className={style.portfolioPicture} src="https://imageportfolio.s3.amazonaws.com/night_hill.jpg" alt="profile pic" />
          </Fade>
        </div>
        <div>
          <Fade right>
            <div className={style.aboutMeDescription}>
            <h1>description</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reiciendis explicabo molestias, nihil corporis repudiandae, sunt architecto nesciunt rem, 
              obcaecati voluptatem perferendis facilis quisquam suscipit! Fuga ipsa iusto temporibus 
              tempora nulla!</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutMeAnimations;
