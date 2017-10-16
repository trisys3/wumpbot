import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import WbMap from './map';

const mapElem = global.document.querySelector('map');

ReactDOM.render(<WbMap />, mapElem);
