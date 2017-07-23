import React from 'react';
import Tiles from './Tiles';

const Game = (props) => {

  const colors = ['red', 'yellow', 'blue', 'green'];

  return (
    <div>
      <div id='scores'>
        Score:
        High:
      </div>
      <div id='board'>
        {colors.map((color) => <Tiles color={color}/>)}
      </div>
    </div>
  )
}

export default Game;
