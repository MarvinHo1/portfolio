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
        <div className={style.aboutGridContainer}>
          <div className={style.picContainer}>
            <Fade left>
              <img className={style.portfolioPicture} src="https://imageportfolio.s3.amazonaws.com/night_hill.jpg" alt="profile pic" />
            </Fade>
          </div>
          <div className={style.aboutPageIconContainer}>
            <section className={style.aboutPageIcons}>
              <div className={style.aboutContactMessage}>If you have any cool projects to work on please contact me either through email or the social links below!</div>
              <div className={style.socialIcons}>
                <a className={style.iconbtns} href="#"><i className="iconbtn fab fa-linkedin-in" /></a>
                <a className={style.iconbtns} href="#"><i className="iconbtn fab fa-github" /></a>
                <a className={style.iconbtns} href="#"><i className="iconbtn fab fa-facebook-f" /></a>
              </div>
            </section>
          </div>
          <div className={style.descriptionContainer}>
            <Fade right>
              <div className={style.aboutMeDescription}>
                <h1>Description</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Reiciendis explicabo molestias, nihil corporis repudiandae, sunt architecto nesciunt rem, 
                  obcaecati voluptatem perferendis facilis quisquam suscipit! Fuga ipsa iusto temporibus 
                  tempora nulla!</p>
              </div>
            </Fade>
          </div>
          <div className={style.aboutImageContainer}>
            <img src="https://imageportfolio.s3.amazonaws.com/aboutMe.jpg" alt="Desk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeAnimations;
