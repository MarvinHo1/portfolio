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
              <img className={style.portfolioPicture} src="https://imageportfolio.s3.amazonaws.com/Marvin+Ho.jpg" alt="profile pic" />
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
                <p>I am a fullstack engineer that enjoys building components that are simple and intuitive to users. I strive to follow best practices when coding and open to new ideas to develop my abilities as a software engineer. I take joy in tinkering with my components to improve user experience. I am interested in learning about different optimizations such as, scaling websites to lower latency, boosting page-load speeds or optimizing the design of my application.</p>
                <br />
                <p>Currently, my goals as a software engineer is to work on developing my skills.  I try to read as many articles about following best practices, frameworks, and libraries.  I spend most of my time working on my projects so I can build different components.</p>
                <br />
                <p>I enjoy being a software developer because of the potential of innovation and growth when working in the tech space.  I like building, creating, and improving different applications and components.  I am motivated as a software engineer because there is always something to learn and always an area to improve!</p>
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
