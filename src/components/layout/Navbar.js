import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faGithub);

class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <FontAwesomeIcon icon={faGithub} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
