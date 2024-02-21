import axios from 'axios';
import config from './config';

class LogInFormService {
    constructor() {
        this.baseUrl = `${config.url}login`;
    }

    async login(data) {
        return await axios.post(this.baseUrl, data, {
            withCredentials: true,
        });
    }
}

export default LogInFormService;
