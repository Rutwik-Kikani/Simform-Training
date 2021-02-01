import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
axios.defaults.headers.post['Content-Type'] = 'application/json';

//use the interceptors
const reqInter = axios.interceptors.request.use(requestconfig => {
    // console.log('[index.js] requestconfigInter..',requestconfig);
    //Edit request config
    return requestconfig; 
}, error => {
    // console.log(error);
    return Promise.reject(error);
});

const resInter = axios.interceptors.response.use(responseconfig => {
    // console.log('[index.js] responseconfigInter..',responseconfig);
    //Edit response config
    return responseconfig; 
}, error => {
    console.log(error);
    return Promise.reject(error);
});

//remove the interceptor
// axios.interceptors.request.eject(reqInter);
// axios.interceptors.response.eject(resInter);
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
