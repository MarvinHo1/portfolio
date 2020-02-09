import React from 'react';
import style from '../../../../stylesheet.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "http://imageportfolio.s3.amazonaws.com/night_hill.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
      ],
      currentIndex: 0,
      translateValue: 0,
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.imageWidth = React.createRef();
  }

  prevSlide() {
    const { width } = this.imageWidth.current;
    const { images, translateValue } = this.state;
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
    const { width } = this.imageWidth.current;
    const { currentIndex, images } = this.state;
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
    const { images, translateValue } = this.state;
    return (
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
    );
  }
}

export default Carousel;
