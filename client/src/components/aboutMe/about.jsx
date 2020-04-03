import React from 'react';
import Fade from 'react-reveal/Fade';
import style from '../../../../stylesheet.css';

const AboutMeAnimations = () => {
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
              <div className={style.aboutContactMessage}>
                If you have any cool projects to work on please contact me either through email or the social links below!
              </div>
              <div className={style.socialIcons}>
                <a className={style.iconbtns} aria-label="Linkedin" href="https://www.linkedin.com/in/marvinho1/"><i className="iconbtn fab fa-linkedin-in" /></a>
                <a className={style.iconbtns} aria-label="Github" href="https://github.com/MarvinHo1"><i className="iconbtn fab fa-github" /></a>
              </div>
            </section>
          </div>
          <div className={style.descriptionContainer}>
            <Fade right>
              <div className={style.aboutMeDescription}>
                <h1>Who Am I?</h1>
                <p> I am a fullstack engineer that enjoys building components that are simple and intuitive to users.  I strive to follow best practices when coding and will always be open to new ideas to improve my ability as a software engineer.  I take joy in tinkering with my components until they’re ready to be pushed to the website environment.  I take interest in learning about different optimizations such as scaling the backend of webpages to improve average latency, or how compressing images to boost page-speed load.  </p>
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
