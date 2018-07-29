import React, { Component } from 'react';
import HeaderStyle from './styles/header';
import withStyle from '../utils/with_style';

class Header extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>Snake 1.0.0</h1>
          </div>
        </div>
      </div>
    );
  }
}


export default withStyle(HeaderStyle, 'Header')(Header);
