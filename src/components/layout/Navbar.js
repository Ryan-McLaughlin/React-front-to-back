import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // react-router-dom exports many things, specify with curly braces

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>{' '}
      <ul>
        <li>
          {/* using <Link> tag does not reload page, the <a> tag does, so not using <a> tag */}
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
