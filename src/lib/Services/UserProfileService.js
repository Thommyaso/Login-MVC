import axios from 'axios';
import config from './config';

class UserProfileService {
    constructor() {
        this.baseUrl = `${config.url}userprofile`;
    }

    async retriveData() {
        return await axios.post(this.baseUrl, {}, {withCredentials: true});
    }
}

export default UserProfileService;
