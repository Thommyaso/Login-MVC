import AbstractController from '../Abstracts/controller';
import RegisterFormService from '../Services/RegisterFormService';

class RegisterFormController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new RegisterFormService();

    }

    async handleRegistrationData(data) {
        console.log(data);
        await this.service.register(data)
            .then(() => {
                window.location.hash = '#/userprofile';
            })
            .catch((res) => {
                console.log(res);
            });
    }
}

export default RegisterFormController;
