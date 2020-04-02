import React from 'react';
import style from '../../../../stylesheet.css';
import Carousel from './carousel.jsx';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectProject: null,
      projects: [
        {
          name: 'Vaykay',
          tech1: 'React.js',
          tech2: 'Node.js/Express',
          tech3: 'PostgreSQL',
          tech4: 'AWS(EC2)',
          cardImage: 'https://imageportfolio.s3.amazonaws.com/aboutMe.jpg',
          images: [
            "http://imageportfolio.s3.amazonaws.com/night_hill.jpg",
            "http://imageportfolio.s3.amazonaws.com/night_hill.jpg",
            "http://imageportfolio.s3.amazonaws.com/night_hill.jpg",
            "http://imageportfolio.s3.amazonaws.com/night_hill.jpg",
          ],
          info: [
            '● Scaled microservice from a maximum throughput of 500 RPS and average latency of 780ms to over 1000 RPS at average latency of 213ms.',
            '● Redesigned database schema and benchmarked several DBMS on core service queries to choose optimal DBMS (postgreSQL) and configuration for 30MM+ record data set.',
            '● Stress tested microservice with New Relic and Loader.io to find bottlenecks, ultimately identifying application tier as primary limiting factor on system throughput.',
            '● Expanded API to support full CRUD operations and follow REST best practices.',
            '● Reconfigured app and storage layers onto separate EC2 instances to reduce single point of failure and increase CPU and memory resources devoted to application layer.',
          ],
        },
        {
          name: 'The-Munch',
          tech1: 'React.js',
          tech2: 'Node.js/Express',
          tech3: 'MongoDB',
          tech4: 'Jest/Enzyme',
          cardImage: 'http://imageportfolio.s3.amazonaws.com/night_hill.jpg',
          images: [
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
          ],
          info: [
            '● Built dynamic front-end React application using webpack for bundling, CSS-modules to handle name-spacing collisions, and AWS S3 to serve images.',
            '● Containerized microservice using Docker to mitigate discrepancies between development and deployment environments and simplify dependency management.',
            '● Followed TDD best practices using Jest and Enzyme during development to maintain unit test coverage, ensuring application functionality and enabling a confident development process.',
            '● Optimized page-load speed from Google PageSpeed Insight score of 30 to 99 through use of minification, file concatenation, and removal of unnecessary dependencies.',
          ],
        },
        {
          name: 'Travel Notes',
          tech1: 'React.js',
          tech2: 'Node.js/Express',
          tech3: 'mLab/MongoDB',
          tech4: 'Heroku',
          cardImage: 'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg',
          images: [
            "https://imageportfolio.s3.amazonaws.com/project-b.jpg",
            "https://imageportfolio.s3.amazonaws.com/project-b.jpg",
            "https://imageportfolio.s3.amazonaws.com/project-b.jpg",
            "https://imageportfolio.s3.amazonaws.com/project-b.jpg",
          ],
          info: [
            '● Integrated with Flickr API to enable user to customize posts with high-quality images.',
            '● Deployed application on Heroku using mLab to host a MongoDB database for persistent application storage.',
          ],
        },
      ],
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.refElement = this.refElement.bind(this);
    this.projectTitle = React.createRef();
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
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

  toggleModal(e) {
    const { isOpen } = this.state;
    document.body.style.overflow = 'hidden';
    this.setState({
      isOpen: !isOpen,
      selectProject: e.target.value,
    });
  }

  clickOutsideModal(event) {
    if (this.ref && !this.ref.contains(event.target)) {
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
      }
      this.setState({ isOpen: false });
    }
  }

  renderCarousel(string) {
    const { isOpen, projects } = this.state;
    let elementInx = null;
    projects.map((carouselInfo, idx) => {
      if (carouselInfo.name === string) {
        elementInx = idx;
      }
    });

    if (isOpen === true) {
      return (
        <div className={style.modalBackground}>
          <div ref={this.refElement} className={style.modal}>
            <Carousel
              projInfo={projects[elementInx]}
            />
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    const { isOpen, projects, selectProject } = this.state;
    return (
      <div className={style.projectComponent} id="projectComponentID">
        <div className={style.projectTitleContainer}>
          <h1 className={style.projectTitles}>
            <hr />
            Project
            <hr />
          </h1>
        </div>
        <div className={style.projectCardComponenet}>
          <div className={style.cardContainer}>
            {projects.map((projectInfo, index) => (
              <div key={index}>
                <div className={style.card}>
                  <div className={style.cardVisual1}>
                    <div className={style.cardDescription}>
                      <h3 className={style.projectTitle} ref={this.projectTitle}>
                        {projectInfo.name}
                      </h3>
                      <img
                        className={style.cardImage}
                        // onClick={this.toggleModal}
                        src={projectInfo.cardImage}
                        alt="Card for Testing"
                      />
                    </div>
                  </div>
                  <div className={style.cardVisual2}>
                    <div className={style.cardDescription}>
                      <p>{projectInfo.tech1}</p>
                      <hr />
                      <p>{projectInfo.tech2}</p>
                      <hr />
                      <p>{projectInfo.tech3}</p>
                      <hr />
                      <p>{projectInfo.tech4}</p>
                      <button onClick={((e) => this.toggleModal(e))} ref={this.buttons} value={projectInfo.name} type="button">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className={style.modalContainer}>
              {isOpen ? (
                this.renderCarousel(selectProject)
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
