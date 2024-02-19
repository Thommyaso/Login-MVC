import AbstractController from '../Abstracts/controller';
import LogInFormService from '../Services/LogInFormService';

class LogInFormController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new LogInFormService();
    }

    handleLoginData(data) {
        this.service.login(data)
            .then((res) => {
                window.location.hash = '#/userprofile';
                console.log(res);
            })
            .catch((res) => {
                console.log('wrong password or login');
                console.log(res);
            });
    }
}

export default LogInFormController;
