import React from 'react';

const Tiles = ({color}) => {
  return (
    <div className={`tile tile-${color}`}></div>
  )
}

export default Tiles;
