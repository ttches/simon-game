import React, { Component } from 'react';

import Game from '../components/Game';

export default class GameContainer extends Component {
  constructor() {
    super();
    this.buildSequence = this.buildSequence.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleTileClick = this.handleTileClick.bind(this);
    this.removeActive = this.removeActive.bind(this);
    this.showSequence = this.showSequence.bind(this);
    this.state = {
      entered: [],
      highScore: 0,
      playerTurn: false,
      playing: false,
      score: 0,
      sequence: []
    }
  }

  buildSequence() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randColor = colors[Math.floor(Math.random() * 4)];
    this.setState({
      ...this.state,
      sequence: this.state.sequence.push(randColor)
    });
  }

  handlePlay() {
    this.setState({
      ...this.state,
      playing: true
    });
    this.buildSequence();
    this.showSequence();
  }

  handleTileClick(e) {
  //  if (!this.state.playing  || !this.state.playerTurn) return;
    const tile = e.target;
    const color = tile.dataset.color;
    this.removeActive();
    tile.classList.add('active');
  }

  removeActive() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => tile.classList.remove('active'));
  }


  showSequence() {
    return;
  }


  render() {
    return (
      <Game
        highScore={this.state.highScore}
        score={this.state.score}
        onPlay={this.handlePlay}
        onTileClick={this.handleTileClick}/>
    )
  }
}
