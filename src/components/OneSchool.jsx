import React from 'react';
import MunicipalityLink from './MunicipalityLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-regular-svg-icons'

const OneSchool = (props) => {

    return (
        <aside className={`card ${props.className}`}>
            <div className="card-body d-flex align-items-center">
                <FontAwesomeIcon fixedWidth className="text-muted ml-3 mr-4" size="3x" icon={faSadTear} />
                <div className="d-flex flex-column">
                    <h4 className="h5 card-title">
                        <span role="heading" aria-level="4">Во <MunicipalityLink {...props} municipality={props.data.opstina} /> има само едно средно училиште</span>
                    </h4>
                    <p className="card-text">Очекуваме и се надеваме дека во иднина бројката на средни училишта во оваа општина значително ќе се зголеми.</p>
                </div>
            </div>
        </aside>
    );
}

export default OneSchool;
