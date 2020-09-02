import React from 'react';
import './stylesheets/index.scss';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="side-bar-container">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {' '}
              <Link to="/charts">charts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Sidebar;
