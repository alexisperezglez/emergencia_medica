import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    Provider
} from 'react-redux';
import configureStore from './store/configureStore';
import decode from 'jwt-decode';
import axios from 'axios';

axios.interceptors.request.use((config) => {
    let accessToken = localStorage.getItem('bearer_token');

    if (accessToken) {

        const {
            exp
        } = decode(accessToken);

        if (Date.now() > exp * 1000) {
            /* if (typeof axiosUserContext.refreshAccessToken !== "function") {
                throw new Error("Access Token cannot be refreshed");
            }
            await axiosUserContext.refreshAccessToken();
            accessToken = getAccessToken(); */
            localStorage.removeItem('bearer_token');
            window.location.href = '/';
        }

        config.headers["authorization"] = `Bearer ${accessToken}`;
        config.headers["cache-control"] = `no-cache`;
    }

    return config;
}, (error) => {
    console.error('AXIOS_INTERCEPTOR_ERROR: ', error);
})


const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
