import React, { Component } from 'react';
import GameFieldStyle from './styles/game_field';
import withStyle from '../utils/with_style';

class GameField extends Component {

  render() {
    return (
      <div>
        Field
      </div>
    );
  }
}


export default withStyle(GameFieldStyle, 'GameField')(GameField);
