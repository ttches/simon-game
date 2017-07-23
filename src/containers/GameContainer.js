import React, { Component } from 'react';

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
      <div>It works!</div>
    )
  }
}
