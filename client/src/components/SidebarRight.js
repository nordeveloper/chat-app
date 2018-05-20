import React from 'react';
import Close from 'react-icons/lib/md/close';
import { sidebarClose } from '../helpers/sidebarToggle';

const colors = {
  violet: '#746db4',
  light: '#dedef7',
  dark: '#263238',
  pink: '#ff95c7',
  green: '#92db25',
};

class SidebarRight extends React.Component {
  constructor() {
    super();

    this.changeTheme = (e) => {
      const theme = e.target.className;

      document.getElementById('theme').href = `/dist/${theme}.css`;
    };

    this.changeBackground = (e) => {
      const background = e.target.className;
      const chatContent = document.getElementsByClassName('chat-content')[0];

      chatContent.style.backgroundImage = `url('/img/${background}.png')`;
    };

    this.closeSidebar = () => {
      sidebarClose('right');
    };
  }

  render() {
    return (
      <div className="sidebar-right sidebar-right-closed">
        <div className="close">
          <button onClick={this.closeSidebar}>
            <Close className="icon" size="24px" />
          </button>
        </div>
        <div className="themes">
          <div className="panel">
            <p>Choose Theme</p>
          </div>
          <div className="colors">
            {Object.keys(colors).map(color => (<div
              className={color}
              style={{ background: colors[color] }}
              onClick={this.changeTheme}
            />))}
          </div>
        </div>
        <div className="backgrounds">
          <div className="panel">
            <p>Choose Background</p>
          </div>
          <div className="images">
            <img className="sun" src="/img/sun.png" alt="sun" onClick={this.changeBackground} />
            <img className="triangular_white" src="/img/triangular_white.png" alt="triangular-white" onClick={this.changeBackground} />
            <img className="triangular_grey" src="/img/triangular_grey.png" alt="triangular-grey" onClick={this.changeBackground} />
            <img className="flowers" src="/img/flowers.png" alt="flowers" onClick={this.changeBackground} />
            <img className="triangular_black" src="/img/triangular_black.png" alt="triangular-black" onClick={this.changeBackground} />
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarRight;
