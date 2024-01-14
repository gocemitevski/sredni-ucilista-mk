import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import SchoolItemMap from './SchoolItemMap';
import { cleanName, transliterate, pageTitle } from '../utils';
import OneSchool from './OneSchool';
import SchoolItemNoDetails from './SchoolItemNoDetails';
import MunicipalityLink from './MunicipalityLink';
import { socialLinkButtons } from '../utils';
import ReactGATrack from './ReactGATrack';

const School = (props) => {

    let { schoolId } = useParams();

    const { setSocialIconLinks, scroll } = props;

    const [school, setSchool] = useState(() => {
        const schoolResult = props.data.find(el => cleanName(transliterate(el.ime.toString() + ' ' + el.opstina.toString())).toLowerCase().includes(schoolId));
        return schoolResult;
    });


    const [nearbySchools, setNearbySchools] = useState(() => {
        const nearbySchoolResults = props.data.filter(el => school && el.opstina.toString().toLowerCase().includes(school.opstina.toLowerCase()));
        return nearbySchoolResults;
    });

    const [position, setPosition] = useState(() => {
        return school && school.koordinati ? school.koordinati : null;
    });

    const [zoom, setZoom] = useState(() => {
        return school && school.koordinati ? 17 : 9;
    });

    useEffect(() => {
        document.title = pageTitle(school.ime);
    }, [school]);

    useEffect(() => {
        setNearbySchools(nearbySchools);
    }, [nearbySchools]);

    useEffect(() => {
        setPosition(position);
    }, [position]);

    useEffect(() => {
        setZoom(zoom);
    }, [zoom]);

    useEffect(() => {
        window.scrollTo(scroll);
    }, [scroll]);

    useEffect(() => {
        setSocialIconLinks(() => socialLinkButtons());
    }, [school, setSocialIconLinks]);

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    return (
        <div className="main-bg page flex-fill">
            <main className="container py-5">
                <SchoolItemMap data={school} position={position} zoom={zoom} setSchool={setSchool} setPosition={setPosition} />
                {nearbySchools.length > 1 ?
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <h2 className="mt-5 mb-4 text-center">Други училишта во <MunicipalityLink municipality={school.opstina} /></h2>
                            <ul className="list-group">
                                {nearbySchools.map((nearSchool, index) => school !== nearSchool && <li key={index} className="list-group-item"><SchoolItemNoDetails {...props} key={index} scroll={scroll} data={nearSchool} setSchool={setSchool} setPosition={setPosition} /></li>)}
                            </ul>
                        </div>
                    </div> : <div className="my-5 row justify-content-center"><div className="col-lg-10"><OneSchool data={school} /></div></div>}
            </main>
            <ReactGATrack location={props.location} title={pageTitle(school.ime)} />
        </div>
    );
}

export default School;
