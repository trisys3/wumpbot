import React from 'react';
import {Map as ReactMap, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';

import {wbMap} from './index.css';

const maxBounds = [[0, 0], [1920, 1080]];

export default () =>
  <ReactMap zoomControl={false} crs={L.CRS.Simple} attributionControl={false} bounds={maxBounds} zoom={13} className={wbMap}>
    <Marker position={[540, 540]}>
      <Popup>
        <span>{'Some popup text.'}</span>
      </Popup>
    </Marker>
  </ReactMap>;
