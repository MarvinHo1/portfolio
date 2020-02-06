import React, { useRef } from 'react';
import style from '../../../../stylesheet.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.refElement = this.refElement.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }


  componentDidMount() {
    document.addEventListener('mousedown', this.clickOutsideModal);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickOutsideModal);
  }

  refElement(element) {
    this.ref = element;
  }

  toggleModal() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  clickOutsideModal(event) {
    if (this.ref && !this.ref.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className={style.projectComponent} id="projectComponentID">
        <div className={style.projectTitleContainer}>
          <h1 className={style.projectTitle}>
            <hr />
            Project
            <hr />
          </h1>
        </div>
        <div className={style.projectCardComponenet}>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <div className={style.cardVisual1}>
                <div className={style.cardDescription}>
                  <h3 className={style.projectTitle}>Design</h3>
                  <img className={style.cardImage} src="http://imageportfolio.s3.amazonaws.com/night_hill.jpg" alt="Card for Testing" />
                </div>
              </div>
              <div className={style.cardVisual2}>
                <div className={style.cardDescription}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, et ad. Reiciendis quas omnis impedit nam harum, corrupti iusto!
                  </p>
                  <button onClick={this.toggleModal} type="button">modal</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.modalContainer}>
          {isOpen ? (
            <div ref={this.refElement} className={style.modal}>
              <p>We have a modal</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Card;


          {/* <div className={style.card}>
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
          </div> */}