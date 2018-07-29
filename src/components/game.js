import React, { Component } from 'react';
import ActionButton from './action_button';
import Score from './score';
import GameField from './game_field';
import GameStyle from './styles/game';
import withStyle from '../utils/with_style';


class Game extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <ActionButton actionType="start" />
          </div>
          <div className="col-6">
            <Score />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <GameField />
          </div>
        </div>
      </div>
    );
  }
}


export default withStyle(GameStyle, 'Game')(Game);
