import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-app-4307d-default-rtdb.firebaseio.com/'
});

export default instance;