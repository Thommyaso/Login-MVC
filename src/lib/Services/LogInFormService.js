import axios from 'axios';

class LogInFormService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/login/';
    }

    async login(data) {
        return await axios.post(this.baseUrl, data, {
            withCredentials: true,
        });
    }
}

export default LogInFormService;