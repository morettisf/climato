import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='title'>Climato</div>
        <Link to={'/'}><button type='button' className='btn btn-primary-outline btn-sm' id='header-btn'>Today</button></Link>
      </div>
    );
  }
}