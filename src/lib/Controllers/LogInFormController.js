import AbstractController from '../Abstracts/controller';
import LogInFormService from '../Services/LogInFormService';

class LogInFormController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new LogInFormService();
    }

    handleLoginData(data, isLoggedIn) {
        if (isLoggedIn) {
            console.log('here');
            window.location.hash = '#/userprofile';
            return;
        }
        this.service.login(data)
            .then((res) => {
                console.log(res);
                window.localStorage.isLoggedIn = true;
                window.location.hash = '#/userprofile';
            })
            .catch((res) => {
                window.localStorage.isLoggedIn = false;
                console.log('wrong password or login');
                console.error(res);
            });
    }
}

export default LogInFormController;
