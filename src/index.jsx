import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga4';
import { Cookies } from "react-cookie-consent";

if (Cookies.get("sredniUcilistaMK") === 'true') {
    ReactGA.initialize(process.env.REACT_APP_GA, { debug: false, gaOptions: { cookieDomain: "gocemitevski.github.io" } });
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
