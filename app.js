import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import './app.css';
import WbMap from './map';

const socket = io();

const mapElem = global.document.querySelector('map');

ReactDOM.render(<WbMap />, mapElem);

if(module.hot) {
  module.hot.accept();
  socket.once('hot-update', checkHot);
}

async function checkHot() {
  const modules = await module.hot.check(true);
  if(!Array.isArray(modules) || !modules.length) {
    socket.once('hot-update', checkHot);
  }
}
