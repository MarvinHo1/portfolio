import React from 'react';
import style from '../../../../stylesheet.css';

const Card = (props) => {
  return (
    <div className={style.projectCardComponenet}>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.cardVisual1}>
            <div className={style.cardDescription}>
              <h3 className={style.projectTitle}>Design</h3>
              <img className={style.cardImage} src="https://www.w3schools.com/w3images/fjords.jpg" alt="Card for Testing" />
            </div>
          </div>
          <div className={style.cardVisual2}>
            <div className={style.cardDescription}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, et ad. Reiciendis quas omnis impedit nam harum, corrupti iusto!
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardVisual1}>
            <div className={style.cardDescription}>
              <h3>Stuff</h3>
              <img className={style.cardImage} src="http://imageportfolio.s3.amazonaws.com/night_hill.jpg" alt="Card for Testing" />
            </div>
          </div>
          <div className={style.cardVisual2}>
            <div className={style.cardDescription}>
              <p>React.js</p>
              <hr />
              <p>Node.js</p>
              <hr />
              <p>MongoDB</p>
              <hr />
              <p>Webpack</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
