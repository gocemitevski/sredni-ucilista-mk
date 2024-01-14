import React from 'react';
import { Link } from 'react-router-dom';
import { cleanName, transliterate } from '../utils';

const SchoolItemLink = (props) => {

    return (
        <Link className="stretched-link" to={`/uchilishte/${encodeURIComponent(cleanName(transliterate(props.data.ime + ' ' + props.data.opstina)).toLowerCase())}`}>{props.data.ime}</Link>
    );
}

export default SchoolItemLink;
