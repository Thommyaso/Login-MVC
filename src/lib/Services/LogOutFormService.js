import axios from 'axios';
import config from './config';

class LogOutFormService {
    constructor() {
        this.baseUrl = `${config.url}logout`;
    }

    async logOut() {
        return await axios.get(this.baseUrl, {
            withCredentials: true,
        });
    }
}

export default LogOutFormService;
