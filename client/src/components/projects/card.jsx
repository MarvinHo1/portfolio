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
          cardImage: 'https://imageportfolio.s3.amazonaws.com/vayKay8.png',
          link: '#',
          images: [
            'https://imageportfolio.s3.amazonaws.com/vayKay1.png',
            'https://imageportfolio.s3.amazonaws.com/vayKay2.png',
            'https://imageportfolio.s3.amazonaws.com/vayKay3.png',
            'https://imageportfolio.s3.amazonaws.com/vayKay4.png',
            'https://imageportfolio.s3.amazonaws.com/vayKay5.png',
            'https://imageportfolio.s3.amazonaws.com/vayKay6.png',
            'https://imageportfolio.s3.amazonaws.com/vayKay7.png',
            'https://imageportfolio.s3.amazonaws.com/vayKay8.png',
            'https://imageportfolio.s3.amazonaws.com/vayKay9.png',
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
          cardImage: 'https://imageportfolio.s3.amazonaws.com/munch1.png',
          link: 'https://youtu.be/pNj89H0Q15c',
          images: [
            'https://imageportfolio.s3.amazonaws.com/munch1.png',
            'https://imageportfolio.s3.amazonaws.com/munch2.png',
            'https://imageportfolio.s3.amazonaws.com/munch3.png',
            'https://imageportfolio.s3.amazonaws.com/munch4.png',
            'https://imageportfolio.s3.amazonaws.com/munch5.png',
            'https://imageportfolio.s3.amazonaws.com/munch6.png',
            'https://imageportfolio.s3.amazonaws.com/munch7.png',
            'https://imageportfolio.s3.amazonaws.com/munch8.png',
            'https://imageportfolio.s3.amazonaws.com/munch9.png',
            'https://imageportfolio.s3.amazonaws.com/munch10.png',
          ],
          info: [
            '● Built dynamic front-end React application using webpack for bundling, CSS-modules to handle name-spacing collisions, and AWS S3 to serve images.',
            '● Containerized microservice using Docker to mitigate discrepancies between development and deployment environments and simplify dependency management.',
            '● Followed TDD best practices using Jest and Enzyme during development to maintain unit test coverage, ensuring application functionality and enabling a confident development process.',
            '● Optimized page-load speed from Google PageSpeed Insight score of 30 to 99 through use of minification, file concatenation, and removal of unnecessary dependencies.',
          ],
        },
        {
          name: 'Kena.ai',
          tech1: 'jQuery',
          tech2: 'AWS(API Gateway & S3)',
          tech3: 'OSMD/Vexflow Library',
          tech4: 'Mobile Responsive',
          cardImage: 'https://imageportfolio.s3.amazonaws.com/kTitle.png',
          link: 'https://www.kena.ai/press',
          images: [
            'https://imageportfolio.s3.amazonaws.com/Link10.png',
            'https://imageportfolio.s3.amazonaws.com/Link11.png',
            'https://imageportfolio.s3.amazonaws.com/Link12.png',
            'https://imageportfolio.s3.amazonaws.com/Link13.png',
            'https://imageportfolio.s3.amazonaws.com/Link14.png',
            'https://imageportfolio.s3.amazonaws.com/Link15.png',
            'https://imageportfolio.s3.amazonaws.com/Link16.png',
            'https://imageportfolio.s3.amazonaws.com/Link17.png',
            'https://imageportfolio.s3.amazonaws.com/Link18.png',
            'https://imageportfolio.s3.amazonaws.com/Link19.png',
            'https://imageportfolio.s3.amazonaws.com/Link20.png',
            'https://imageportfolio.s3.amazonaws.com/Link21.png',
            'https://imageportfolio.s3.amazonaws.com/Link22.png',
          ],
          info: [
            '● Developed, debugged, and deployed webpage features with jQuery, CSS, HTML, and Javascript',
            '● Created specific UI features to be compatible for desktops, mobile phones, and tablets',
            '● Collaborated with backend developers for integrating UI and REST APIs',
            '● Refactored legacy code to optimize loading speed and improve user experience',
            '● Used AWS to update deployment environment and construct APIs',
          ],
        },
      ],
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.refElement = this.refElement.bind(this);
    this.projectTitle = React.createRef();
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
    this.demoLink = this.demoLink.bind(this);
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

  demoLink(e) {
    // console.log(e.target.value)
    const { projects } = this.state;
    projects.filter((projectLink) => {
      if (projectLink.name === e.target.value) {
        if (projectLink.link === '#') {
          alert('unfortunately this project does not have a demo.')
        }
        window.location.href = projectLink.link;
      }
    });
  }

  // (X button) to close the modal;
  closeModal() {
    const { isOpen } = this.state;
    document.body.style.overflow = 'auto';
    this.setState({
      isOpen: !isOpen,
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
              closeCarousel={this.closeModal}
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
                      <div className={style.cardButtonContainer}>
                        <button onClick={((e) => this.toggleModal(e))} value={projectInfo.name} type="button">Info</button>
                        <button onClick={((e) => this.demoLink(e))} value={projectInfo.name} type="button">Demo</button>
                      </div>
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
