import React, { Component } from 'react';

import Game from '../components/Game';

export default class GameContainer extends Component {
  constructor() {
    super();
    this.buildSequence = this.buildSequence.bind(this);
    this.checkEntered = this.checkEntered.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleTileClick = this.handleTileClick.bind(this);
    this.showSequence = this.showSequence.bind(this);
    this.toggleActiveTile = this.toggleActiveTile.bind(this);
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
      this.showSequence(0);
    });
  }

  checkEntered() {
    const {sequence, entered, score} = this.state
    const idx = entered.length - 1;
    const color = entered[entered.length -1];
    const tile = document.querySelector(`.tile[data-color=${color}]`);
    if (!(entered[idx] === sequence[idx])) {
      this.gameOver();
    } else {
      this.toggleActiveTile(tile);
      //Continue playing if the full sequence has been entered
      if (sequence.length === entered.length) {
        this.setState({
          ...this.state,
          score: score + 1
        })
        setTimeout(() => {
          this.buildSequence();
        }, 2000);
      }
    }
  }

  gameOver() {
    const {sequence, entered, score, highScore} = this.state;
    const color = sequence[entered.length -1];
    const tile = document.querySelector(`.tile[data-color=${color}]`);
    this.toggleActiveTile(tile);
    if (score > highScore) {
      this.setState({
        ...this.state,
        playing: false,
        score: 0,
        highScore: score
      });
    }
    //return true;
  }

  handlePlay() {
    this.setState({
      ...this.state,
      entered: [],
      playing: true,
      score: 0,
      sequence: []
    }, () => {
      this.buildSequence()
    });
  }

  handleTileClick(e) {
    if (!this.state.playing  || !this.state.playerTurn) return;
    const tile = e.target;
    const color = tile.dataset.color;
    let newEntered = [...this.state.entered];
    newEntered.push(color);
    this.setState({
      ...this.state,
      entered: newEntered
    }, () => {
      this.checkEntered();
    });
  }

  showSequence(idx) {
    const {sequence} = this.state;
    const color = sequence[idx];
    const tile = document.querySelector(`.tile[data-color=${color}]`);
    this.toggleActiveTile(tile);

    if (idx === sequence.length - 1) {
      this.setState({
        ...this.state,
        entered: [],
        playerTurn: true
      });
      return;
    } else {
      setTimeout(() => {
        this.showSequence(idx + 1);
      }, 1000);
    }
  }

  toggleActiveTile(tile) {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => tile.classList.remove('active'));
    tile.classList.add('active');

    setTimeout( () => {
      tile.classList.remove('active');
    }, 800);

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
