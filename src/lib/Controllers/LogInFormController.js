import AbstractController from '../Abstracts/controller';
import {logIn} from '../Service/service';
import logger from '../utils/logger';

class LogInFormController extends AbstractController {
    constructor(model) {
        super(model);
    }

    handleLoginData(data) {
        logIn(data)
            .then(() => {
                window.localStorage.isLoggedIn = true;
                window.location.hash = '#/userprofile';
            })
            .catch((err) => {
                window.localStorage.isLoggedIn = false;

                logger.error(err);
                logger.error('wrong password or login');

            });
    }
}

export default LogInFormController;
