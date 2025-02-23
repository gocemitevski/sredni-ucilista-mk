import React, { useEffect } from 'react';
import { pageTitle } from '../utils';
import { socialLinkButtons } from '../utils';
import ReactGATrack from './ReactGATrack';

const About = (props) => {

    const { setSocialIconLinks } = props;

    useEffect(() => {
        window.scrollTo(props.scroll);
    }, [props]);

    useEffect(() => {
        document.title = pageTitle(props.title);
    }, [props]);

    useEffect(() => {
        setSocialIconLinks(() => socialLinkButtons());
    }, [setSocialIconLinks]);

    return (
        <main className="container flex-fill page py-5">
            <h1 className="h3">{props.title}</h1>
            <div className="row">
                <div className="col-lg-6 order-lg-2">
                    <figure>
                        <a href={`${process.env.PUBLIC_URL}/sredni-uchilishta-r-s-makedonija-1200x627.png`}>
                            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/sredni-uchilishta-r-s-makedonija-1200x627.png`} alt="" />
                        </a>
                    </figure>
                </div>
                <div className="col-lg-6 order-lg-1">
                    <p><strong>„{process.env.REACT_APP_TITLE}“</strong> е самостоен проект на <a target="_blank" rel="noopener noreferrer" href="https://gocemitevski.com/">Гоце Митевски</a>, изработен според <a target="_blank" rel="noopener noreferrer" title="Регистар на средни училишта во Република Северна Македонија" href="https://mon.gov.mk/download/?f=spisok%20na%20sredni%20ucilista_1.xls">збирка на податоци</a> на Министерство за образование и наука на Р. С. Македонија.</p>
                    <p>Изворната збирка на податоци е збогатена со гео-просторни координати за секое училиште, а исто така, основните податоци се нормализирани за приказ во идентичен текстуален формат. Поправени се и голем број на печатни грешки.</p>
                    <p>За изработката се користени следните библиотеки:</p>
                    <ul>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>React Router</li>
                        <li>ReactGA</li>
                        <li>Leaflet</li>
                        <li>React Leaflet</li>
                        <li>FontAwesome</li>
                    </ul>
                    <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/gocemitevski/sredni-ucilista-mk">Изворниот код</a> е достапен на GitHub.</p>
                </div>
            </div>
            <ReactGATrack {...props} />
        </main>
    );
}

export default About;
