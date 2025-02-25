import React from 'react';
import L from 'leaflet';
import iconRetinaUrl from '../assets/images/leaflet/marker-icon-alt-2x.png';
import iconUrl from '../assets/images/leaflet/marker-icon-alt.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer } from 'react-leaflet';
import SchoolMapMarker from './SchoolMapMarker';

const SchoolMap = (props) => {

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl,
        iconUrl: iconUrl,
        shadowUrl: shadowUrl
    });

    return (
        <Map style={props.style} scrollWheelZoom={props.scrollWheelZoom} dragging={false} center={props.position} zoom={props.zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <SchoolMapMarker {...props} />
        </Map>
    );
}

export default SchoolMap;
