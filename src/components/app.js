import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from './Header';
import Actions from './Actions';
import Game from './Game';
import Statistics from './Statistics';
import { Actions as WindowActions } from '../store/state/window';
import { Actions as GameActions } from '../store/state/game';
import { func, bool, string } from 'prop-types';
import { RUNNING, STARTING, FINISHED, NONE } from '../config/game_status';


const StyleWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;


class App extends Component {

  static propTypes = {
    resizeWindow: func.isRequired,
    gameStatus: string.isRequired,
    keyPress: func.isRequired
  };


  constructor(props) {
    super(props);

    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    this.props.resizeWindow();
  }

  componentDidMount() {
    this.props.resizeWindow();   

    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.this.handleWindowResize);
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { gameStatus } = this.props;

    return (
      <StyleWrapper className="App">
        <Header />
        <Actions />
        <Statistics />
        <Game />
      </StyleWrapper>
    );
  }

  handleWindowResize(e) {
    this.props.resizeWindow();
  }

  handleKeyPress(e) {
    const key = e.keyCode;
    this.props.keyPress(key)
  }
}


export default connect(
  (state) => ({
    gameStatus: state.game.status
  }),
  (dispatch) => ({
    resizeWindow: () => dispatch(WindowActions.resize()),
    keyPress: (key) => dispatch(GameActions.keyPress(key))
  })
)(App);
