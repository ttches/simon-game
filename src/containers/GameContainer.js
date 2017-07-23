import React, { Component } from 'react';

import Game from '../components/Game';

export default class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      entered: [],
      playing: true,
      round: 0,
      sequence: []
    }
  }

  render() {
    return (
      <Game />
    )
  }
}
