import axios from 'axios';

class UserProfileService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/userprofile/';
    }

    async retriveData() {
        return await axios.post(this.baseUrl, {}, {withCredentials: true});
    }
}

export default UserProfileService;
