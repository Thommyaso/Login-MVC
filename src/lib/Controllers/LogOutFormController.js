import AbstractController from '../Abstracts/controller';
import {logOut} from '../Service/service';
import logger from '../utils/logger';

class LogOutFormController extends AbstractController {
    constructor(model) {
        super(model);
    }

    handleLogOutClick() {
        logOut()
            .then(() => {
                window.localStorage.isLoggedIn = false;
                window.location.hash = '';
            })
            .catch((err) => {
                logger.error(err);
            });
    }
}

export default LogOutFormController;
