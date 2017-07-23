import React from 'react';
import Tiles from './Tiles';

const Game = ({score, highScore, onPlay, onTileClick}) => {

  const colors = ['red', 'yellow', 'blue', 'green'];

  return (
    <div>
      <div className='scores'>
        <span>{`Score: ${score}`}</span>
        <span>{`High Score: ${highScore}`}</span>
      </div>

      <div id='board'>
        {colors.map((color, idx) =>
          <Tiles
            color={color}
            key={idx}
            onTileClick={onTileClick}/>)}
      </div>

      <div>
        <button onClick={onPlay}>Play</button>
      </div>
    </div>
  )
}

export default Game;
