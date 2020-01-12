import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const AboutMeAnimations = (props) => {
  return (
    <div>
      <div>
        <Fade left>
          <h1>Appa</h1>
        </Fade>
      </div>
      <div>
        <Slide right>
          <h1>React Reveal</h1>
        </Slide>
      </div>
    </div>
  );
};

export default AboutMeAnimations;
