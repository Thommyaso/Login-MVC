import axios from 'axios';

class RegisterFormService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/register';
    }

    async register(data) {
        return await axios.post(this.baseUrl, data, {
            withCredentials: true,
        });
    }
}

export default RegisterFormService;
