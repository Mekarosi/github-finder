import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEdit);
class Navbar extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: 'blue' }} className='navbar bg-primary'>
        <h1>
          <FontAwesomeIcon icon={['fas', 'edit']} style={{ padding: '10px' }} />
          Navbar
        </h1>
      </nav>
    );
  }
}

export default Navbar;
