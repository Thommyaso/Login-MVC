import AbstractController from '../Abstracts/controller';
import {register} from '../Service/service';

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
                console.log(error);
            });
    }
}

export default RegisterFormController;
