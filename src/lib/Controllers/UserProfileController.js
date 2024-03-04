import AbstractController from '../Abstracts/controller';
import {retriveData} from '../Service/service';
import logger from '../utils/logger';

class UserProfileController extends AbstractController {
    constructor(model) {
        super(model);
    }

    async initialize() {

        return await retriveData()
            .then((res) => {
                this.model.handleData(res.data);
                return res;
            })
            .catch((error) => {
                logger.error(error);
                window.localStorage.isLoggedIn = false;
                window.location.hash = '#/login';
                return error;
            });
    }


}

export default UserProfileController;
