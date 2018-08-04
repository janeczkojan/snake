import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from './Header';
import Actions from './Actions';
import Game from './Game';
import Statistics from './Statistics';
import { Actions as WindowActions } from '../store/state/window';
import { func } from 'prop-types';


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
    resizeWindow: func.isRequired
  };


  constructor(props) {
    super(props);

    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentWillMount() {
    this.props.resizeWindow();
  }

  componentDidMount() {
    this.props.resizeWindow();   
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.this.handleWindowResize);
  }

  render() {
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
}


export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    resizeWindow: () => dispatch(WindowActions.resize())
  })
)(App);
