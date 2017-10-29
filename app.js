import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import './app.css';
import WbMap from './map';

const socket = io();

const mapElem = global.document.querySelector('wb-map');

render();

if(module.hot) {
  module.hot.accept();
  module.hot.accept('./map', () => render());
  socket.once('hot-update', checkHot);
}

async function checkHot() {
  const modules = await module.hot.check(true);
  if(!Array.isArray(modules) || !modules.length) {
    // most likely, the server was restarted, meaning we can't do a hot-update
    // we should think about giving a message in the browser or just forcing a
    // full reload
    socket.once('hot-update', checkHot);
  }
}

function render() {
  return ReactDOM.render(<AppContainer>
    <WbMap />
  </AppContainer>, mapElem);
}
