import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://node.dom24x7.ru/api/v1/',
    headers: {
        accept: 'application/json',
        // withCredentials: true
    }
})

export default instance