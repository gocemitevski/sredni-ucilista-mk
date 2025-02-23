import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import SchoolItemLink from './SchoolItemLink';

const SchoolMapMarker = (props) => {

    return (
        <Marker position={props.position}>
            <Popup>
                <h5><SchoolItemLink {...props} /></h5>
                <address>{props.data.adresa}, {props.data.opstina}</address>
            </Popup>
        </Marker>
    );
}

export default SchoolMapMarker;
