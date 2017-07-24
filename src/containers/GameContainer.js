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
      sequence: ['green', 'yellow', 'red']
    }
  }

  buildSequence() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randColor = colors[Math.floor(Math.random() * 4)];
    const newSequence = [...this.state.sequence];
    newSequence.push(randColor);
    this.setState({
      ...this.state,
      sequence: newSequence
    }, () => {
      this.showSequence();
    });
  }

  handlePlay() {
    this.setState({
      ...this.state,
      entered: [],
      playing: true,
      socre: 0,
      //sequence: []
    }, () => {
      this.buildSequence()
    });
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
    let idx = 0;
    const {sequence} = this.state;
    setInterval( () => {
      //If the sequence has been shown, let the player play
      if (idx >= sequence.length) {
        this.setState({
          ...this.state,
          playerTurn: true
        });
        return;
      }

      const color = sequence[idx];
      const tile = document.querySelector(`.tile[data-color=${color}]`);
      tile.classList.add('active');

      setTimeout( () => {
        tile.classList.remove('active');
      }, 800);

      idx++;
    }, 1000);
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
