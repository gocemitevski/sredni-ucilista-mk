import React from 'react';
import SchoolItemLink from './SchoolItemLink';
import Mail from './Mail';

const SchoolItem = (props) => {

    const emails = props.data.email.split(/[\s|,|;]/);

    return (
        <article className="card school" key={props.index}>
            <div className="row no-gutters">
                <div className="col-lg-6 p-4 d-flex flex-column">
                    <h2 className={`h5 ${props.data.tip ? `mb-2` : `mb-0`}`}>
                        <SchoolItemLink {...props} data={props.data} />
                    </h2>
                    {props.data.tip && <p className='text-muted flex-fill'>{props.data.tip}</p>}
                </div>
                <div className="col-lg-6">
                    <div className="card-body">
                        <dl className="mb-0">
                            <dt>Адреса:</dt>
                            <dd><address className="mb-0">{props.data.adresa}<br />{props.data.opstina}</address></dd>
                        </dl>
                        {emails.length > 0 && <ul className="list-inline mt-3 mb-0">{emails.map((item, key) => item && <Mail key={key} props={item} />)}</ul>}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default SchoolItem;
