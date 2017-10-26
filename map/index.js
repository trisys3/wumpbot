import React from 'react';
import {Map as ReactMap} from 'react-leaflet';
import L from 'leaflet';

import './index.css';

const maxBounds = [[0, 0], [10000, 10000]];
const center = [5000, 5000];

export default function map() {
  return <ReactMap zoomControl={false} crs={L.CRS.Simple} attributionControl={false} maxBounds={maxBounds} center={center} zoom={13} />;
}
