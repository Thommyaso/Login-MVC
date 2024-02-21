import AbstractController from '../Abstracts/controller';
import LogInFormService from '../Services/LogInFormService';

class LogInFormController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new LogInFormService();
    }

    handleLoginData(data) {
        this.service.login(data)
            .then(() => {
                window.location.hash = '#/userprofile';
            })
            .catch((res) => {
                console.log('wrong password or login');
                console.log(res);
            });
    }
}

export default LogInFormController;
