import AbstractController from '../Abstracts/controller';
import RegisterFormService from '../Services/RegisterFormService';

class RegisterFormController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new RegisterFormService();
    }

    async handleRegistrationData(data) {
        await this.service.register(data)
            .then(() => {
                window.localStorage.isLoggedIn = true;
                window.location.hash = '#/userprofile';
            })
            .catch((error) => {
                window.localStorage.isLoggedIn = false;
                console.log(error);
            });
    }
}

export default RegisterFormController;
