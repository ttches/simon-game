import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const board = document.querySelector('#board');
const width = board.offsetWidth;

window.addEventListener('resize', dynamicHeight);

dynamicHeight();
function dynamicHeight() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 400) {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
      console.log(tile.offsetWidth);
      tile.style.height = `${windowWidth * .5}px`;
    });
  } else {
    return;
  }
}
