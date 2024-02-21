import axios from 'axios';
import config from './config';

class RegisterFormService {
    constructor() {
        this.baseUrl = `${config.url}register`;
    }

    async register(data) {
        return await axios.post(this.baseUrl, data, {
            withCredentials: true,
        });
    }
}

export default RegisterFormService;
