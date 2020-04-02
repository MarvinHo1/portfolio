/* eslint-disable react/prop-types */
import React from 'react';
import style from '../../../../stylesheet.css';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      translateValue: 0,
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.imageWidth = React.createRef();
  }

  prevSlide() {
    const { images } = this.props.projInfo;
    const { width } = this.imageWidth.current;
    const { translateValue } = this.state;
    const carouselWidth = (images.length - 1) * -width;
    if (translateValue === 0) {
      this.setState({
        currentIndex: (images.length - 1),
        translateValue: carouselWidth,
      });
    }
    if (translateValue < 0) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + width,
      }));
    }
  }

  nextSlide() {
    const { images } = this.props.projInfo;
    const { width } = this.imageWidth.current;
    const { currentIndex } = this.state;
    if (currentIndex === images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }
    return this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - width,
    }));
  }

  render() {
    const { images, info } = this.props.projInfo;
    const { translateValue } = this.state;
    return (
      <div>
        <div className={style.carouselContainer}>
          <div
            className={style.imageCarousel}
            style={{
              transform: `translateX(${translateValue}px)`,
              transition: 'transform .5s',
            }}
          >
            {
              images.map((image, i) => (
                <img key={i} src={image} alt="carousel" ref={this.imageWidth} />
              ))
            }
          </div>
          <div className={style.arrows}>
            <button className={style.backArrow} onClick={this.prevSlide} type="button">
              <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
            </button>
            <button className={style.forwardArrow} onClick={this.nextSlide} type="button">
              <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div>
          {
            info.map((bulletPoints, idx) => {
              // console.log(bulletPoints)
              return (
                <div key={idx}>
                  {bulletPoints}
                  <br />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Carousel;
