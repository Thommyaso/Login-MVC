import AbstractController from '../Abstracts/controller';
import UserProfileService from '../Services/UserProfileService';
import Cookies from 'js-cookie';

class UserProfileController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new UserProfileService();
    }

    async initialize() {
        await this.service.retriveData()
            .then((res) => {
                console.log(res);
                this.model.handleData(res.data);
            })
            .catch(() => {
                console.log('error');
                Cookies.remove('MVC-LogInApp');
                window.location.hash = '#/login';
            });
    }
}

export default UserProfileController;
