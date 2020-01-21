import React from 'react';
import style from '../../../../stylesheet.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  renderView() {
    const { isToggleOn } = this.state;
    if (isToggleOn === true) {
      return (
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Projects</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div className={style.navBarComponent}>
        <nav className={style.navbar}>
          <div className={style.logo}> M </div>
          <a href="#" className={style.toggleButton} onClick={this.handleClick} >
            <span className={style.hamburgerBar} />
            <span className={style.hamburgerBar} />
            <span className={style.hamburgerBar} />
          </a>
          <div className={style.navbarLinks}>
            {this.renderView()}
          </div>
          <div className={style.navbarLinks2}>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


export default NavBar;
