import React from 'react';

const Tiles = ({color, onTileClick}) => {
  return (
    <div
      data-color={color}
      className={`tile tile-${color}`}
      onClick={onTileClick}>
    </div>
  )
}

export default Tiles;
