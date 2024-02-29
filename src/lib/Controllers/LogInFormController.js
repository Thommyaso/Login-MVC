import AbstractController from '../Abstracts/controller';
import {logIn} from '../Service/service';

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
            .catch((res) => {
                window.localStorage.isLoggedIn = false;
                console.log('wrong password or login');
                console.error(res);
            });
    }
}

export default LogInFormController;
