import AbstractController from '../Abstracts/controller';
import {register} from '../Service/service';
import logger from '../utils/logger';

class RegisterFormController extends AbstractController {
    constructor(model) {
        super(model);
    }

    async handleRegistrationData(data) {
        await register(data)
            .then(() => {
                window.location.hash = '#/login';
            })
            .catch((error) => {
                logger.error(error);
            });
    }
}

export default RegisterFormController;
