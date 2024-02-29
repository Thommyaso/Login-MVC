import axios from 'axios';
import config from './config';

const baseUrl = config.url;

export const register = async (data) => {
    return await axios.post(`${baseUrl}/register`, data, {
        withCredentials: true,
    });
};

export const retriveData = async () => {
    return await axios.post(`${baseUrl}/userprofile`, {}, {withCredentials: true});
};

export const logOut = async () => {
    return await axios.get(`${baseUrl}/logout`, {
        withCredentials: true,
    });
};

export const logIn = async (data) => {
    return await axios.post(`${baseUrl}/login`, data, {
        withCredentials: true,
    });
};

