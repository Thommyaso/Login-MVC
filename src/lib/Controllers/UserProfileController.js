import AbstractController from '../Abstracts/controller';
import UserProfileService from '../Services/UserProfileService';

class UserProfileController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new UserProfileService();
    }

    async initialize() {
        await this.service.retriveData()
            .then((res) => {
                this.model.handleData(res.data);
            })
            .catch((error) => {
                console.log(error);
                window.localStorage.isLoggedIn = false;
                window.location.hash = '#/login';
            });
    }
}

export default UserProfileController;
