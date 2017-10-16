import React from 'react';
import {Map as ReactMap, ImageOverlay} from 'react-leaflet';
import L from 'leaflet';

import './index.css';

export default function map() {
  return <ReactMap preferCanvas={true} zoomControl={false} crs={L.CRS.Simple} attributionControl={false}>
    <ImageOverlay url='map-bg.png' />
  </ReactMap>;
}
