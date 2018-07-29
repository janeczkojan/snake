import React, { Component } from 'react';
import { number } from 'prop-types';


class Score extends Component {

  static propTypes = {
    value: number.isRequired
  }

  static defaultProps = {
    value: 0
  }


  render() {
    const { value } = this.props;

    return (
      <div>
        <h3>{value}</h3>
      </div>
    );
  }
}


export default Score;
