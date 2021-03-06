import React from 'react';
import style from '../../../../stylesheet.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
    this.renderView = this.renderView.bind(this);
    this.handleContactScroll = this.handleContactScroll.bind(this);
    this.handleHomeScroll = this.handleHomeScroll.bind(this);
    this.handleAboutScroll = this.handleAboutScroll.bind(this);
    this.handleProjectScroll = this.handleProjectScroll.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  // eslint-disable-next-line class-methods-use-this
  handleHomeScroll() {
    const element = document.getElementById('introComponentID');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    this.setState({
      isToggleOn: false,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handleAboutScroll() {
    const element = document.getElementById('aboutMeComponentID');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    this.setState({
      isToggleOn: false,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handleProjectScroll() {
    const element = document.getElementById('projectComponentID');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    this.setState({
      isToggleOn: false,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handleContactScroll() {
    const element = document.getElementById('contactComponentID');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    this.setState({
      isToggleOn: false,
    });
  }

  renderView() {
    const { isToggleOn } = this.state;
    if (isToggleOn === true) {
      return (
        <ul>
          <li><a onClick={this.handleHomeScroll}>Home</a></li>
          <li><a onClick={this.handleAboutScroll}>About</a></li>
          <li><a onClick={this.handleProjectScroll}>Projects</a></li>
          <li><a onClick={this.handleContactScroll}>Contact</a></li>
          <li><a href="https://imageportfolio.s3.amazonaws.com/Marvin+Ho+Resume.pdf">Resume</a></li>
        </ul>
      );
    }
    return null;
  }

  render() {
    return (
      <div className={style.navBarComponent}>
        <nav className={style.navbar}>
          <div className={style.logo} onClick={this.handleHomeScroll}> MH </div>
          <div href="#" className={style.toggleButton} onClick={this.handleClick}>
            <span className={style.hamburgerBar} />
            <span className={style.hamburgerBar} />
            <span className={style.hamburgerBar} />
          </div>
          <div className={style.navbarLinks}>
            {this.renderView()}
          </div>
          <div className={style.navbarLinks2}>
            <ul>
              <li><a onClick={this.handleHomeScroll}>Home</a></li>
              <li><a onClick={this.handleAboutScroll}>About</a></li>
              <li><a onClick={this.handleProjectScroll}>Projects</a></li>
              <li><a onClick={this.handleContactScroll}>Contact</a></li>
              <li><a href="https://imageportfolio.s3.amazonaws.com/Marvin+Ho+Resume.pdf">Resume</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


export default NavBar;
