import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
        Authorization: 'Bearer {token}'
    }
});