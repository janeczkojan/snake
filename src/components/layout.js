import React, { Component } from 'react';
import Header from './header';
import Game from './game';


class Layout extends Component {

  render() {
    return (
      <div>
        <Header />
        <Game />
      </div>
    );
  }
}


export default Layout;
